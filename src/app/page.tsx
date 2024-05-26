import "./app.css";
import type { NextPage } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const Home: NextPage = (): ReactNode => {
  return (
    <main className="home">
      <div className="container">
        <div className="info">
          <h1>Save-Code: Ваш надёжный хранитель кода</h1>
          <p>
            Save-Code - это безопасное и удобное хранилище с встроенным редактором кода <br /> для вашего
            кода.
          </p>
        </div>
        <div className="color_line_light">
          <div className="purple_contant contant_light"></div>
          <div className="pink_contant contant_light"></div>
        </div>
        <div className="links_services">
          <Link href="/todo">Сохранить код</Link>
          <Link
            href="/editor"
            target="_blank"
          >
            Наш редактор код
          </Link>
          <Link href="/contacts">Контакты</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
