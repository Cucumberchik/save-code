import LoginDialog from "@/modals/LoginDialog";
import SigninDialog from "@/modals/SigninDialog";
import { NextPage } from "next";
import { ReactNode } from "react";

const AuthDialogProvider: NextPage<ProvidersType> = ({
  children,
}): ReactNode => {
  return (
    <>
      <SigninDialog />
      <LoginDialog />
      {children}
    </>
  );
};
export default AuthDialogProvider;
