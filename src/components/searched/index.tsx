/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../Button/Button'
import MicIcon from '@mui/icons-material/Mic';
import style from './index.module.css'
import React from 'react';

export function Searched({ setSearchValue }: { setSearchValue: (event: React.MouseEvent<HTMLButtonElement>) => void }) {
    const onChange = (event: any) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className={style.InputContainer}>
            <input onChange={onChange} type="text" name="text" className={`${style.input} px-2 py-4`} id="input" placeholder="Search" />
            <Button styleBtn={2} icon={<MicIcon />} content='voice' />
        </div>
    )
}

