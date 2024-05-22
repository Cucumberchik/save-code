import { NextPage } from "next"
import { ReactNode } from "react"
import { CheckUserProvider } from "./ChechUserProvider"



const Providers:NextPage<ProvidersType> = ({children}):ReactNode => {


    return  (
        <CheckUserProvider>
            {children}
        </CheckUserProvider>
    )
    
}

export default Providers