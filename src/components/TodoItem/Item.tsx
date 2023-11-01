import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import style from './styles.module.css'
import { Button } from '../Button/Button'

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

interface Props {
    onCompleted: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void,
    todo: Todo
}

function Item({ onCompleted, onDelete, todo }: Props) {
    const setStyle = todo.completed ? style.bg_done : style.bg_planned

    return (
        <div className={`flex py-[20px] px-[10px] justify-between items-center rounded-xl ${setStyle}`}>
            <Button styleBtn={3} onclickE={onCompleted} icon={todo.completed ? <CheckCircleIcon fontSize='large' color='success' /> : <CheckCircleOutlineIcon fontSize='large' color='primary' />} />

            <div className={`${style.text} flex-1 mx-2 text-xl text-center`}>
                <span>{todo.title}</span>
            </div>

            <Button styleBtn={3} onclickE={onDelete} icon={<DeleteIcon fontSize='large' color='error' />} />

        </div >
    )
}

export default Item