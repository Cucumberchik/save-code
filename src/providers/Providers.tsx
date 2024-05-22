import { NextPage } from "next"
import { ReactNode } from "react"
import { CheckUserProvider } from "./ChechUserProvider"
import AuthDialogProvider from "./AuthProvider"
import CloseDropdawn from "./CloseDropdawn"
import LoadingProvider from "./LoadingProvider"



const Providers:NextPage<ProvidersType> = ({children}):ReactNode => {


    return  (
        <CloseDropdawn>
            <CheckUserProvider>
                <LoadingProvider>
                    <AuthDialogProvider>
                        {children}
                    </AuthDialogProvider>
                </LoadingProvider>
            </CheckUserProvider>
        </CloseDropdawn>
    )
    
}

export default Providers