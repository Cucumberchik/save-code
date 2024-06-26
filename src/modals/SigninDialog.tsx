"use client";
import Typography from "@/typography/typogrpahy";
import { useDialogStatus } from "@/zustands/Dialogs";
import useAuth from "@/zustands/auth";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { ChangeEvent, FormEventHandler, useState, type ReactNode } from "react";

interface StyledSectionPropsType {
  $status: string;
}
const fadeIn = keyframes`
  from {
    transform: scale(0.9);
     opacity: 0; }
  to {
    transform: scale(1);
     opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1;
    transform: scale(1);
   }
  to { 
    transform: scale(0.9);
     opacity: 0; display: none; }
`;

const Section = styled.section<StyledSectionPropsType>`
  z-index: 20;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  display: ${({ $status }) => ($status === "disabled" ? "none" : "flex")};
  animation: ${({ $status }) =>
      $status === "opened" ? fadeIn : $status === "closed" ? fadeOut : "none"}
    0.3s forwards;
  background-color: ${({ $status }) =>
    $status === "opened" || $status === "closed"
      ? "rgba(0, 0, 0, 0.438)"
      : "transparent"};

  .contant {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ._contant {
    display: ${({ $status }) => ($status === "closed" ? "none" : "flex")};
  }
  .container {
    padding: 20px;
    border-radius: 8px;
    height: 40%;
    width: 40%;
    background: #151515;
    border: 0.5px solid var(--gray-alpha-400);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    form {
      width: 100%;
      height: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      button {
        width: 80%;
        height: 35px;
        background: var(--gray-alpha-1000);
        color: var(--background-100);
        border-radius: 6px;
        border: none;
        &:hover {
          background: var(--gray-alpha-950);
        }
      }
    }
    input {
      color: var(--geist-foreground);
      background: var(--ds-background-100);
      transition: box-shadow 0.2s;
      font-size: 14px;
      border-radius: 4px;
      max-width: 100%;
      padding: 2px 5px;
      width: 80%;
      height: 33px;
      box-shadow: 0 0 0 1px var(--gray-alpha-600);
      border: 1px solid var(--gray-alpha-400);
      outline: none;
    }
    input:focus {
      box-shadow:
        0 0 0 1px var(--gray-alpha-600),
        0 0 0 4px hsla(0, 0%, 100%, 0.24);
    }
  }
  .login_google {
    width: 60%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 40px;
    background: var(--gray-alpha-1000);
    color: var(--background-100);
    border-radius: 6px;
    border: none;
    &:hover {
      background: var(--gray-alpha-950);
    }
  }
`;

const SigninDialog: NextPage = (): ReactNode => {
  const { statusSignin, setStatusSignin } = useDialogStatus();
  const [formInput, setFormInput] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const { signInGoogleProvider, signIn } = useAuth();

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleFormLogin: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!formInput.email || !formInput.password) {
      alert("Пустое поле");
      return;
    }
    if (!formInput.email.includes("@")) {
      alert("Введите коректно электронную почту");
      return;
    }
    if (formInput.password.length < 9) {
      alert("Длина пароля должно быть минимум 8 символов");
      return;
    }

    signIn(formInput.email, formInput.password);
    setStatusSignin("closed");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <Section
      $status={statusSignin}
      id="dialog">
      <div
        className="contant"
        onClick={() => setStatusSignin("closed")}>
        <div
          className="container"
          onClick={(e) => e.stopPropagation()}>
          <Typography variant="h1">Войти</Typography>
          <form onSubmit={handleFormLogin}>
            <input
              name="email"
              onChange={handleInputValue}
              type="email"
              placeholder="Електронная почта.."
            />
            <input
              name="password"
              onChange={handleInputValue}
              type="password"
              placeholder="Пароль"
            />
            <button type="submit">
              <Typography variant="h5">Войти</Typography>
            </button>
          </form>
          <button
            className="login_google"
            onClick={signInGoogleProvider}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.204 3.86667C12.1201 3.86667 13.4126 4.67778 14.1496 5.35556L17.0294 2.6C15.2607 0.98889 12.9591 0 10.204 0C6.2131 0 2.76638 2.24445 1.08838 5.51112L4.3877 8.02223C5.21536 5.61112 7.50561 3.86667 10.204 3.86667V3.86667Z"
                fill="#F25022"
              />
              <path
                d="M20 10.2222C20 9.39998 19.932 8.79998 19.7846 8.17776H10.2041V11.8889H15.8277C15.7143 12.8111 15.1021 14.2 13.7415 15.1333L16.9615 17.5778C18.8889 15.8333 20 13.2667 20 10.2222V10.2222Z"
                fill="#4285F4"
              />
              <path
                d="M4.39909 11.9778C4.18367 11.3556 4.05896 10.6889 4.05896 10C4.05896 9.31113 4.18367 8.64447 4.38776 8.02224L1.08844 5.51113C0.396825 6.86669 0 8.38891 0 10C0 11.6111 0.396825 13.1334 1.08844 14.4889L4.39909 11.9778V11.9778Z"
                fill="#FBBC05"
              />
              <path
                d="M10.2042 20C12.9593 20 15.2722 19.1111 16.9615 17.5778L13.7416 15.1333C12.8799 15.7222 11.7234 16.1333 10.2042 16.1333C7.50575 16.1333 5.2155 14.3889 4.39917 11.9778L1.09985 14.4889C2.77786 17.7556 6.21323 20 10.2042 20V20Z"
                fill="#34A853"
              />
            </svg>
            <Typography variant="h4">Вход через Google</Typography>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default SigninDialog;
