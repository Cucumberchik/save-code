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
            Save-Code - это безопасное и удобное хранилище <br /> для вашего
            кода. Мы понимаем, что каждая строка кода - это результат <br />{" "}
            вашего труда, интеллектуальной энергии и времени. Именно поэтому мы
            создали <br /> Save-Code - чтобы гарантировать сохранность и
            доступность вашего кода в любое время и в любом месте.
          </p>
        </div>
        <div className="color_line_light">
          <div className="purple_contant contant_light"></div>
          <div className="pink_contant contant_light"></div>
        </div>
        <div className="links_services">
          <Link href="/todo">Сохранить код</Link>
          <Link
            href="https://javascript-code-editor.vercel.app/"
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
