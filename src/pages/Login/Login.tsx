import { Spinner } from "@atoms/Spinner";
import { ILoginMutation, useLogin } from "@entities/Login";
import { AuthCard } from "@modules/AuthCard";
import { LoginForm } from "@modules/LoginForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, { useEffect, useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { mutate: loginUser, isPending } = useLogin({
    onSuccess: () => {
      toast.success("Login successful! Welcome back!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      navigate("/");
    },
    onError: () => {
      toast.error("Login failed. Please check your credentials.");
    },
  });
  useEffect(() => {
    sessionStorage.removeItem("accessToken");
  }, []);

   const handleLogin = async (formValues: ILoginMutation) => {
      try {
        if (!executeRecaptcha) {
          throw new Error("reCAPTCHA not available");
        }
  
        const token = await executeRecaptcha('login');
        console.log('reCAPTCHA token:', token);
  
        loginUser(formValues);
      } catch (error) {
        toast.error("Registration verification failed");
        console.error('Error:', error);
      }
    };

  return (
    <AuthCard

      imageUrl={
        "https://cdn.vectorstock.com/i/500p/82/47/man-with-login-form-young-guy-enter-vector-54318247.jpg"
      }
    >
      <Spinner isLoading={isPending} />
      
      <div className="mt-3">
                        <GoogleReCaptchaProvider
                  reCaptchaKey="6LcGntkqAAAAAIBxjVl7MxCIirQlvERk3Y1IQf6q"
                >
                          <LoginForm loginUser={handleLogin} />
                      
                </GoogleReCaptchaProvider>
                </div> 

    </AuthCard>
  );
};
