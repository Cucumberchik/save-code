import { NextPage } from "next"
import { ReactNode } from "react"
import { CheckUserProvider } from "./ChechUserProvider"
import AuthDialogProvider from "./AuthProvider"
import CloseDropdawn from "./CloseDropdawn"



const Providers:NextPage<ProvidersType> = ({children}):ReactNode => {


    return  (
        <CloseDropdawn>
            <CheckUserProvider>
                <AuthDialogProvider>
                    {children}
                </AuthDialogProvider>
            </CheckUserProvider>
        </CloseDropdawn>
    )
    
}

export default Providers