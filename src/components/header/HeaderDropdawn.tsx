"use client";
import Typography from "@/typography/typogrpahy";
import { useDropdawn } from "@/zustands/Dropdawns";
import useAuth from "@/zustands/auth";
import type { NextPage } from "next";
import Link from "next/link";
import type { ReactElement } from "react";

type LiType = {
  title: string;
  to: string;
  icon: string;
};

export const HeaderDropdawn: NextPage = (): ReactElement => {
  const { isHeaderDropdawn, setIsHeaderDropdawn } = useDropdawn();
  const { signOutUser } = useAuth();

  const lis: LiType[] = [
    {
      title: "Заметки",
      to: "/todo",
      icon: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
    },
    {
      title: "Редактор кода",
      to: "/editor",
      icon: "m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z",
    },
    {
      title: "Профиль",
      to: "/profile",
      icon: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    },
    {
      title: "Настройки",
      to: "/settings",
      icon: "M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495",
    },
  ];
  return (
    <div
      className={"dropdawn dropdawn_header " + isHeaderDropdawn}
      onClick={(e) => e.stopPropagation()}>
      <ul>
        {lis.map((el: LiType, idx: number) => (
          <li
            className="dropdawn_item"
            key={idx}
            onClick={() => setIsHeaderDropdawn("close")}>
            <svg
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={el.icon}
              />
            </svg>

            <Link href={el.to}>{el.title}</Link>
          </li>
        ))}
        <button
          onClick={signOutUser}
          className="dropdawn_item dropdawn_item">
          <svg
            width={20}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>

          <Typography variant="body">Выйти</Typography>
        </button>
      </ul>
    </div>
  );
};
