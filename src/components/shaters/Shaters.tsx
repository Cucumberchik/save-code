'use client'
import { NextPage } from "next";
import { ReactNode } from "react";

import typescript from "@/assets/code_languages/typescript.png"
import javascript from "@/assets/code_languages/javascript.png"
import python from "@/assets/code_languages/python.png"
import php from "@/assets/code_languages/php.png"
import csharp from "@/assets/code_languages/csharp.png"
import java from "@/assets/code_languages/java.png"
import Image, { StaticImageData } from "next/image";

import Typography from "@/typography/typogrpahy";


interface ShaterType {
    img:StaticImageData,
    title:string
}

export const Shaters:NextPage = ():ReactNode => {
    const shaters:ShaterType[] = [
        {
            img: typescript,
            title: "Typescript"
        },
        {
            img: javascript,
            title: "Javascript"
        },
        {
            img: python,
            title: "Python"
        },
        {
            img: php,
            title: "PHP"
        },
        {
            img: csharp,
            title: "C#"
        },
        {
            img: java,
            title: "java"
        },
    ]
    return shaters.map((el:ShaterType, idx:number)=>(
        <div className={"shater shater_" + (idx + 1)}>
            <Image src={el.img} alt={el.title} />
            <Typography variant="h3">{el.title}</Typography>
        </div>
    ))
}