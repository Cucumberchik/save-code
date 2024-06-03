"use client";
import Typography from "@/typography/typogrpahy";
import { useDialogStatus } from "@/zustands/Dialogs";
import useTodo from "@/zustands/todo";
import axios from "axios";
import type { NextPage } from "next";
import type { ReactNode } from "react";
import "./dialogs.scss";
import useAuth from "@/zustands/auth";

const DeleteDialog: NextPage<{ id: number }> = ({ id }): ReactNode => {
  const { deleteStatus, setDelete } = useDialogStatus();
  const { user } = useAuth();
  const { setTodo } = useTodo();
  let API: any = process.env.NEXT_PUBLIC_API_URL;
  const handleDelete = async () => {
    let { data } = await axios.delete(
      `${API}/delete-code/${user.uid}?code=${id}`
    );

    setTodo(data);
    setDelete("closed");
  };

  return (
    <section
      className={"delete_dialog " + deleteStatus}
      id="dialog">
      <div
        className="contant"
        onClick={() => setDelete("closed")}>
        <div
          className="container"
          onClick={(e) => e.stopPropagation()}>
          <Typography variant="h4">
            После удаление кода, его нельзя будет восстоновить
          </Typography>
          <div className="action_btns">
            <button
              className="close_btn"
              onClick={() => setDelete("closed")}>
              <Typography variant="body">Отменить</Typography>
            </button>
            <button
              onClick={handleDelete}
              className="delete_btn">
              <Typography variant="body">Подтвердить</Typography>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteDialog;
