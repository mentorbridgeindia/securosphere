import { ReactComponent as IconCheckCircle } from "@assets/icons/icon-check.svg";
import { ReactComponent as IconCrossCircle } from "@assets/icons/icon-cross.svg";
import { ReactComponent as IconPlus } from "@assets/icons/icon-plus.svg";
import { ReactComponent as IconTrash } from "@assets/icons/icon-trash.svg";
import { useCheckDomain } from "@entities/Domain";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Form, FormLabel, InputGroup } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGetOrganization } from "../../entities/Organization";
import { loginCallbackConfigAtom } from "./atoms/loginCallbackConfigAtom";
import { LoginCallbackConfigState } from "./LoginCallbackConfig.types";
import { loginCallbackSchema } from "./loginCallbackSchema";

export const LoginCallbackForm = ({ isReadOnly }: { isReadOnly: boolean }) => {
  const [isDomainAvailable, setIsDomainAvailable] = useState(false);
  const [loginCallbackConfig, setLoginCallbackConfig] = useAtom(
    loginCallbackConfigAtom
  );

  const { data } = useGetOrganization({
    queryConfig: { enabled: true },
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm<LoginCallbackConfigState>({
    resolver: yupResolver(loginCallbackSchema as any),
    defaultValues: {
      orgName: loginCallbackConfig?.orgName || "",
      website: loginCallbackConfig?.website || "",
      orgLogo: loginCallbackConfig?.orgLogo || "",
      authorizedOrigins: loginCallbackConfig?.authorizedOrigins || [""],
      callbackUrl: loginCallbackConfig?.callbackUrl || "",
      subDomain: loginCallbackConfig?.subDomain || "",
      termsOfServiceUrl: loginCallbackConfig?.termsOfServiceUrl || "",
    },
    mode: "onBlur",
  });

  const values = watch();

  useEffect(() => {
    if (data) {
      reset({
        authorizedOrigins: data.authorizedDomains,
        orgLogo: data.logo,
        orgName: data.organizationName,
        callbackUrl: data.callbackUrl,
        website: data.website,
        subDomain: data.subDomain,
        termsOfServiceUrl: data.termsOfServiceUrl,
      });
    }
  }, [data]);

  const {
    data: domainData,
    isLoading: domainLoading,
    error: domainError,
  } = useCheckDomain(watch("subDomain"));

  useEffect(() => {
    if (!domainLoading && !domainError && !!watch("subDomain")) {
      setIsDomainAvailable(true);
    } else {
      setIsDomainAvailable(false);
    }
  }, [domainData, domainLoading, domainError, watch]);

  const handleAddOrigin = () => {
    const authorizedOrigins = watch("authorizedOrigins");
    const isFilled = authorizedOrigins.every((origin) => origin.trim() !== "");
    if (isFilled) {
      setValue("authorizedOrigins", [...authorizedOrigins, ""]);
    }
  };

  const handleRemoveOrigin = (index: number) => {
    const authorizedOrigins = watch("authorizedOrigins");
    setValue(
      "authorizedOrigins",
      authorizedOrigins.filter((_, i) => i !== index)
    );
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
        setValue(name as any, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: LoginCallbackConfigState) => {
    setLoginCallbackConfig(data);
  };

  const updateLoginCallbackConfig = () => {
    setLoginCallbackConfig({
      orgName: watch("orgName"),
      subDomain: watch("subDomain"),
      authorizedOrigins: watch("authorizedOrigins"),
      callbackUrl: watch("callbackUrl"),
      orgLogo: watch("orgLogo"),
      website: watch("website"),
      termsOfServiceUrl: watch("termsOfServiceUrl"),
    });
  };

  useEffect(() => {
    updateLoginCallbackConfig();
  }, [
    watch("orgName"),
    watch("subDomain"),
    watch("authorizedOrigins"),
    watch("callbackUrl"),
    watch("orgLogo"),
    watch("website"),
    watch("termsOfServiceUrl"),
  ]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Form.Group controlId="domain" className="mb-3">
        <FormLabel>Organization Name</FormLabel>
        <Controller
          name="orgName"
          control={control}
          render={({ field }) => (
            <Form.Control
              type="text"
              {...field}
              disabled={isReadOnly}
              isValid={!!watch("orgName")}
              isInvalid={!!errors.orgName}
              autoFocus
            />
          )}
        />
      </Form.Group>
      <Form.Group controlId="subDomain" className="mb-3">
        <FormLabel>Sub Domain</FormLabel>
        {data?.organizationName && (
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              value={data?.subDomain}
              disabled
              name="your subdomain"
            />
            <InputGroup.Text className="text-small">
              .securosphere.com
            </InputGroup.Text>
          </InputGroup>
        )}
        {!data?.organizationName && (
          <InputGroup className="mb-3">
            <Controller
              name="subDomain"
              control={control}
              render={({ field }) => (
                <Form.Control
                  type="text"
                  {...field}
                  disabled={!!data?.organizationName}
                  isValid={!!watch("subDomain") && isDomainAvailable}
                  isInvalid={
                    !!errors.subDomain ||
                    (!isDomainAvailable && errors.subDomain)
                  }
                />
              )}
            />
            <InputGroup.Text className="text-small">
              .securosphere.com
            </InputGroup.Text>
          </InputGroup>
        )}
        {!data?.organizationName && watch("subDomain") && (
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
          <button
            type="button"
            className="ms-2 empty-btn"
            onClick={handleAddOrigin}
          >
            <IconPlus />
          </button>
        </FormLabel>
        {watch("authorizedOrigins")?.map((origin, index) => (
          <div className="d-flex align-items-center mb-2" key={index}>
            <Controller
              name={`authorizedOrigins.${index}`}
              control={control}
              render={({ field }) => (
                <Form.Control
                  type="url"
                  isInvalid={!!errors.authorizedOrigins?.[index]}
                  {...field}
                  autoComplete="off"
                  isValid={!!watch(`authorizedOrigins.${index}`)}
                  placeholder="localhost,stublab.in"
                  disabled={isReadOnly}
                />
              )}
            />
            {watch("authorizedOrigins").length > 1 && (
              <button
                type="button"
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
        <Controller
          name="callbackUrl"
          control={control}
          render={({ field }) => (
            <Form.Control
              type="text"
              isInvalid={!!errors.callbackUrl}
              isValid={!!watch("callbackUrl")}
              {...field}
              placeholder="https://example.com/oauth/success"
              disabled={isReadOnly}
            />
          )}
        />
      </Form.Group>
      <Form.Group controlId="orgLogo" className="mb-3">
        <FormLabel>Organization Logo</FormLabel>
        <Form.Control type="file" name="orgLogo" onChange={handleUpload} />
      </Form.Group>
      <Form.Group controlId="website" className="mb-3">
        <FormLabel>Organization Website</FormLabel>
        <Controller
          name="website"
          control={control}
          render={({ field }) => (
            <Form.Control
              type="url"
              {...field}
              isInvalid={!!errors.website}
              isValid={!!watch("website")}
              disabled={isReadOnly}
              placeholder="https://example.com"
            />
          )}
        />
      </Form.Group>
      <Form.Group controlId="termsOfServiceUrl" className="mb-3">
        <FormLabel>Terms of Service URL</FormLabel>
        <Controller
          name="termsOfServiceUrl"
          control={control}
          render={({ field }) => (
            <Form.Control
              type="url"
              isValid={!!watch("termsOfServiceUrl")}
              {...field}
              isInvalid={!!errors.termsOfServiceUrl}
              disabled={isReadOnly}
              placeholder="https://example.com/terms-of-service"
            />
          )}
        />
      </Form.Group>
    </Form>
  );
};
