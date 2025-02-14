import api from "../api";

export const sendData = async <T>(
  url: string,
  body: unknown
): Promise<T | null> => {
  try {
    const response = await api.post<T>(url, body);
    if (response.status === 200 || response.status === 201) {
      if (url.includes("signin")) handleLoginResponse(response);
      return response.data;
    }
    return null;
  } catch (error) {
    console.error("Error sending data:", error);
    throw new Error("Something went wrong");
  }
};

const handleLoginResponse = (response: any) => {
  if (response) {
    const accessToken = response.headers["authorization"];
    const isClientIdAvailable = sessionStorage.getItem("clientId");
    const location = response.headers["location"];
    const isNotSecurosphere =
      !/^(?!.*app\.securosphere\.in).*\.securosphere\.in$/.test(
        window.location.href
      );

    if (isClientIdAvailable && isNotSecurosphere && location) {
      window.location.href = location + "?token=" + accessToken;
    }
    if (accessToken !== undefined && accessToken !== null) {
      sessionStorage.setItem("accessToken", accessToken.split(" ")[1]);
    }
    return response.data;
  }
};
