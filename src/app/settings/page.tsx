import Building from "@/components/building/building";
import type { NextPage } from "next";
import type { ReactNode } from "react";



const Settings:NextPage = ():ReactNode => {

    return <div style={{width: "100%", height: "80vh", display: "flex", alignItems: 'center', justifyContent: "center"}}>
    <Building />
    </div>
}

export default Settings