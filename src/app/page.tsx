
import "./app.scss";
import backdrop from "@/assets/liner_cube/Group 62.png"
import type { NextPage } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Shaters } from "@/components/shaters/Shaters";
import { Editor } from "@monaco-editor/react";
import { Present } from "@/components/prenest/present";

const Home: NextPage = (): ReactNode => {
  return (
    <main className="home">
      <div className="container">
        <div className="info">
          <div className="info_title">
            <h1>Save-Code: Ваш надёжный хранитель кода</h1>
            <p>
              Save-Code - это безопасное и удобное хранилище с  <br /> встроенным редактором кода для вашего
              кода.
            </p>
          </div>
          <div className="editor_code">
            <Present/>
          </div>
        </div>
        <div className="color_line_light">
          {/* <Image src={backdrop} alt="liner cube" /> */}
          <div className="redial_accent"></div>
        </div>
        <div className="editor_info">
          <h2>Редактор кода поддерживает</h2>
          <div className="editor_info_languages">
            <Shaters />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
