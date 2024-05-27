'use server'
import { NextPage } from "next";
import { ReactNode } from "react";

import typescript from "@/assets/code_languages/typescript.png"
import javascript from "@/assets/code_languages/javascript.png"
import python from "@/assets/code_languages/python.png"
import php from "@/assets/code_languages/php.png"
import csharp from "@/assets/code_languages/csharp.png"
import java from "@/assets/code_languages/java.png"
import cpp from "@/assets/code_languages/cpp.svg"
import ruby from "@/assets/code_languages/ruby.svg"
import swift from "@/assets/code_languages/swift.svg"
import rust from "@/assets/code_languages/rust.svg"
import dart from "@/assets/code_languages/dart.svg"
import go from "@/assets/code_languages/go.svg"
import kotlin from "@/assets/code_languages/kotilin.svg"


import Image, { StaticImageData } from "next/image";



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
            img: ruby,
            title: "Ruby"
        },
        {
            img: cpp,
            title: "C++"
        },
        {
            img: java,
            title: "java"
        },
        {
            img: swift,
            title: "Swift"
        },
        {
            img: rust,
            title: "Rust"
        },
        {
            img: dart,
            title: "Dart"
        },
        {
            img: go,
            title: "Go"
        },
        {
            img: kotlin,
            title: "Kotlin"
        },
    ]
    return shaters.map((el:ShaterType, idx:number)=>(
        <div className={"shater shater_" + (idx + 1)}>
            <Image src={el.img} alt={el.title} />
            <h4 className="title_20_500">{el.title}</h4>
        </div>
    ))
}