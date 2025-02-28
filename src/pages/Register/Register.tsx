import { Spinner } from "@atoms/Spinner";
import { useInit } from "@entities/Domain";
import { AuthCard } from "@modules/AuthCard";
import { RegisterForm } from "@modules/RegisterForm";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, {  useState } from "react";
import { registerUser } from "@/entities/Register/register";
import { IRegisterMutation } from "@/entities/Register";

export const Register = () => {
  const { data, isLoading, } = useInit();
  const { executeRecaptcha } = useGoogleReCaptcha();


  useEffect(() => {
    if (!isLoading && !data) {
      window.location.href = "https://securosphere.in";
    }

    
    sessionStorage.removeItem("accessToken");
  }, [isLoading, data]);
  const handleRegister = async (formValues: IRegisterMutation) => {
        try {
          if (!executeRecaptcha) {
            throw new Error("reCAPTCHA not available");
          }
    
          const token = await executeRecaptcha('register');
          console.log('reCAPTCHA token:', token);
    
          registerUser(formValues);
        } catch (error) {
          toast.error("Registration verification failed");
          console.error('Error:', error);
        }
      };

  if (isLoading) return <Spinner isLoading />;
   
  return (
    <AuthCard
      imageUrl={
        "https://cdn.vectorstock.com/i/500p/82/47/man-with-login-form-young-guy-enter-vector-54318247.jpg"
      }
    >
       <Spinner isLoading={isLoading} /> 
      <div className="mt-3">
        <GoogleReCaptchaProvider
          reCaptchaKey="6LcGntkqAAAAAIBxjVl7MxCIirQlvERk3Y1IQf6q"
          scriptProps={{
            async: true,
            defer: true,
            appendTo: 'head',
          }}
        >
      <RegisterForm termsOfServiceUrl={data?.termsOfServiceUrl ?? ""} />
      </GoogleReCaptchaProvider>
      </div>
    </AuthCard>
  );
};
