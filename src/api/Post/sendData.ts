import { ILoginMutation } from "../../entities/Login";
import api from "../api";

export const sendData = async <T>(
  url: string,
  body: unknown
): Promise<T | null> => {
  try {
    const response = await api.post<T>(url, body);
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204 ||
      response.status === 206
    ) {
      if (url.includes("mfa-login")) handleMFALoginResponse(response);
      if (url.includes("signin"))
        handleLoginResponse(response, body as never as ILoginMutation);
      return response.data;
    }
    return null;
  } catch (error) {
    console.error("Error sending data:", error);
    throw new Error("Something went wrong");
  }
};

const handleLoginResponse = (response: any, body: ILoginMutation) => {
  if (response?.data && body) {
    sessionStorage.setItem("email", body.email);
    if (!response.data?.errorCode) {
      sessionStorage.setItem("qrCode", response.data);
    }
    window.location.href = "/mfa";
  }
};

const handleMFALoginResponse = (response: any) => {
  if (response) {
    const accessToken = response.headers["authorization"];
    const isClientIdAvailable = sessionStorage.getItem("clientId");
    const location = response.headers["location"];
    const isNotSecurosphere =
      !/^(?!.*app\.securosphere\.in).*\.securosphere\.in$/.test(
        window.location.href
      );

    if (isClientIdAvailable && isNotSecurosphere && location && accessToken) {
      sessionStorage.clear();
      window.location.href = location + "?token=" + accessToken.split(" ")[1];
    }
    if (accessToken !== undefined && accessToken !== null) {
      sessionStorage.setItem("accessToken", accessToken.split(" ")[1]);
    }
    return response.data;
  }
};
