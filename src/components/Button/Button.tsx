import React, { useContext } from "react"
import style from './styles.module.css'
import { TodoContext } from '../../context/TodoContext'
interface Prop {
    content?: string,
    icon: React.ReactNode,
    styleBtn?: number
    onclickE?: (event: React.MouseEvent<HTMLButtonElement>) => void
}


export function Button({ content, icon, styleBtn = 1, onclickE }: Prop) {
    const { openModal, handleStateModal } = useContext(TodoContext)
    const active = openModal ? style.active : ''
    switch (styleBtn) {
        case 1: {
            return (
                <button onClick={handleStateModal} className={`${style.btn_icon} ${active}`}>
                    {icon ? icon : <p>{content}</p>}
                </button>
            )
        }
        case 2: {
            return (
                <button className={`${style.btn_icon2} h-full`}>
                    {icon ? icon : <p>{content}</p>}
                </button >
            )
        }

        case 3: {
            return (
                <button style={{ background: 'transparent', border: 'none' }} onClick={onclickE} >
                    {icon ? icon : <p>{content}</p>}
                </button >
            )
        }
    }
}