'use client'
import Typography from '@/typography/typogrpahy'
import { useDialogStatus } from '@/zustands/Dialogs'
import useTodo from '@/zustands/todo'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import axios from 'axios'
import type { NextPage } from 'next'
import type { ReactNode } from 'react'

interface StyledSectionPropsType {
    $status: string
}
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; display: none; }
`;

const Section = styled.section<StyledSectionPropsType>`
  cursor: pointer;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  display: ${({ $status }) => ($status === 'disabled' ? 'none' : 'flex')};
  animation: ${({ $status }) => ($status === 'opened' ? fadeIn : $status === 'closed' ? fadeOut : 'none')} 0.3s forwards;
  background-color: ${({ $status }) => ($status === 'opened' || $status === 'closed' ? 'rgba(0, 0, 0, 0.438)' : 'transparent')};

  .contant {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ._contant {
    display: ${({ $status }) => ($status === 'closed' ? 'none' : 'flex')};
  }
  .container {
    width: 40%;
    height: 20%;
    background: var(--background-200);
    box-shadow: var(--shadow-border-inse);
    border-radius: 8px;
    border: 1px solid var(--gray-alpha-500);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    .action_btns {
        display: flex;
        gap: 30px;
        button {
            padding: 8px 20px;
            border-radius: 8px;
        }
        .delete_btn {
            color: var(--red-600);
            background: none;
            border: 1px solid var(--red-600);
        }
        .close_btn {
          background: var(--gray-alpha-1000);
          color: black;
          border: 1px solid var(--gray-alpha-600);
        }
    }
  }
`;

const DeleteDialog:NextPage<{id:number}> = ({id}):ReactNode => {
  const {deleteStatus, setDelete} = useDialogStatus();
  const {todo, user_id, setTodo} = useTodo()
  let API:any = process.env.NEXT_PUBLIC_API_URL;
  const handleDelete = async() => {
    const newTodo:ElementType[] = todo.filter((el:ElementType, idx:number)=>idx !== id)
    let {data} = await axios.patch(`${API}/${user_id}`, {todo: newTodo});
    
    setTodo(data.find((el:UserType)=>el._id == user_id).todo)
    setDelete('closed')
  }
  
  
  return (
    <Section $status={deleteStatus} id="dialog" >
        <div className="contant" onClick={()=>setDelete('closed')} >
            <div className="container" onClick={(e)=>e.stopPropagation()}>
                <Typography variant='h4'>
                    После удаление кода, его нельзя будет восстоновить 
                </Typography>
                <div className="action_btns">
                    <button className='close_btn' onClick={()=>setDelete("closed")} >
                      <Typography variant='body'>
                        Отменить
                      </Typography>
                    </button>
                    <button onClick={handleDelete} className='delete_btn' >
                      <Typography variant='body'>
                        Подтвердить
                      </Typography>
                    </button>
                </div>
            </div>
        </div>
    </Section>
  )
}


export default DeleteDialog