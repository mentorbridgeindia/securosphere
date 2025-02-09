import { ReactComponent as IconCheckCircle } from "@assets/icons/icon-check.svg";
import { ReactComponent as IconCrossCircle } from "@assets/icons/icon-cross.svg";
import { ReactComponent as IconPlus } from "@assets/icons/icon-plus.svg";
import { ReactComponent as IconTrash } from "@assets/icons/icon-trash.svg";
import { useCheckDomain } from "@entities/Domain";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Form, FormLabel, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { loginCallbackConfigAtom } from "./atoms/loginCallbackConfigAtom";
import { LoginCallbackConfigState } from "./LoginCallbackConfig.types";

export const LoginCallbackForm = ({ isReadOnly }: { isReadOnly: boolean }) => {
  const [domainValue, setDomainValue] = useState("");
  const [isDomainAvailable, setIsDomainAvailable] = useState(false);
  const [loginCallbackConfig, setLoginCallbackConfig] = useAtom(
    loginCallbackConfigAtom
  );
  const {
    data: domainData,
    isLoading: domainLoading,
    error: domainError,
  } = useCheckDomain(domainValue);

  useEffect(() => {
    if (!domainLoading && !domainError && !!loginCallbackConfig?.subDomain) {
      setDomainValue("");
      setIsDomainAvailable(true);
    } else {
      setIsDomainAvailable(false);
    }
  }, [domainData, domainLoading, domainError, loginCallbackConfig?.subDomain]);

  const [setup, setSetup] = useState<LoginCallbackConfigState>({
    orgName: loginCallbackConfig?.orgName || "",
    website: loginCallbackConfig?.website || "",
    orgLogo: loginCallbackConfig?.orgLogo || "",
    authorizedOrigins: loginCallbackConfig?.authorizedOrigins || [""],
    callbackUrl: loginCallbackConfig?.callbackUrl || "",
    subDomain: loginCallbackConfig?.subDomain || "",
    termsOfServiceUrl: loginCallbackConfig?.termsOfServiceUrl || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSetup((prev) => ({ ...prev, [name]: value }));
    setLoginCallbackConfig(setup);
  };

  const handleUpdateOrigins = (index: number, value: string) => {
    setSetup((prev) => ({
      ...prev,
      authorizedOrigins: prev.authorizedOrigins.map((origin, i) =>
        i === index ? value : origin
      ),
    }));
    setLoginCallbackConfig(setup);
  };

  const handleAddOrigin = () => {
    const isFilled = setup.authorizedOrigins.every(
      (origin) => origin.trim() !== ""
    );
    if (isFilled) {
      setSetup((prev) => ({
        ...prev,
        authorizedOrigins: [...prev.authorizedOrigins, ""],
      }));
      setLoginCallbackConfig(setup);
    }
  };

  const handleWebsiteBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const validateUrl = async (url: string) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.status === 404) {
          toast.error("Terms & Conditions url not valid");
        }
      } catch {
        toast.error("Terms & Conditions url not valid");
      }
    };

    validateUrl(e.target.value);
  };

  const handleRemoveOrigin = (index: number) => {
    setSetup((prev) => ({
      ...prev,
      authorizedOrigins: prev.authorizedOrigins.filter((_, i) => i !== index),
    }));
    setLoginCallbackConfig(setup);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginCallbackConfig(setup);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDomainValue(e.target.value);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      if (
        (file.type !== "image/png" && file.type !== "image/jpeg") ||
        file.size > 3000000
      ) {
        toast.error("Please upload a PNG or JPEG file");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSetup((prev) => ({ ...prev, [name]: reader.result }));
        setLoginCallbackConfig(setup);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Group controlId="domain" className="mb-3">
        <FormLabel>Organization Name</FormLabel>
        <Form.Control
          type="text"
          name="orgName"
          onChange={handleChange}
          disabled={isReadOnly}
          value={setup.orgName}
        />
      </Form.Group>
      <Form.Group controlId="subDomain" className="mb-3">
        <FormLabel>Sub Domain</FormLabel>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            name="subDomain"
            onChange={handleChange}
            disabled={isReadOnly}
            value={setup.subDomain}
            onBlur={handleBlur}
            isInvalid={!!domainValue && !isDomainAvailable}
          />
          <InputGroup.Text className="text-small">
            .securosphere.com
          </InputGroup.Text>
        </InputGroup>
        {domainValue && (
          <div
            className={`d-flex align-items-center gap-2 text-small fs-8 ${
              isDomainAvailable ? "text-success" : "text-danger"
            }`}
          >
            {isDomainAvailable ? (
              <>
                <IconCheckCircle /> Sub Domain is available
              </>
            ) : (
              <>
                <IconCrossCircle /> Sub Domain is not available
              </>
            )}
          </div>
        )}
      </Form.Group>
      <Form.Group controlId="authorizedOrigins" className="mb-3">
        <FormLabel className="d-flex align-items-center justify-content-between">
          <div>Authorized Origins</div>
          <button className="ms-2 empty-btn" onClick={handleAddOrigin}>
            <IconPlus />
          </button>
        </FormLabel>
        {setup.authorizedOrigins.map((origin, index) => (
          <div className="d-flex align-items-center mb-2" key={index}>
            <Form.Control
              type="url"
              name="origin"
              autoComplete="off"
              placeholder="localhost,stublab.in"
              value={origin}
              onChange={(e) => handleUpdateOrigins(index, e.target.value)}
              disabled={isReadOnly}
            />
            {setup.authorizedOrigins.length > 1 && (
              <button
                className="ms-2 empty-btn text-danger"
                onClick={() => handleRemoveOrigin(index)}
              >
                <IconTrash />
              </button>
            )}
          </div>
        ))}
      </Form.Group>
      <Form.Group controlId="callbackUrls" className="mb-3">
        <FormLabel className="d-flex align-items-center justify-content-start">
          Callback URL
        </FormLabel>
        <Form.Control
          type="text"
          name="callbackUrl"
          placeholder="https://example.com/oauth/success"
          value={setup.callbackUrl}
          onChange={handleChange}
          disabled={isReadOnly}
        />
      </Form.Group>
      <Form.Group controlId="orgLogo" className="mb-3">
        <FormLabel>Organization Logo</FormLabel>
        <Form.Control type="file" name="orgLogo" onChange={handleUpload} />
      </Form.Group>
      <Form.Group controlId="website" className="mb-3">
        <FormLabel>Organization Website</FormLabel>
        <Form.Control
          type="url"
          name="website"
          onChange={handleChange}
          value={setup.website}
          disabled={isReadOnly}
        />
      </Form.Group>
      <Form.Group controlId="termsOfServiceUrl" className="mb-3">
        <FormLabel>Terms of Service URL</FormLabel>
        <Form.Control
          type="url"
          name="termsOfServiceUrl"
          onChange={handleChange}
          value={setup.termsOfServiceUrl}
          onBlur={handleWebsiteBlur}
          disabled={isReadOnly}
        />
      </Form.Group>
    </Form>
  );
};
