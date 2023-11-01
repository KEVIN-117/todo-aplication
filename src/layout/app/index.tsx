/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../../components/Button/Button'
import AddIcon from '@mui/icons-material/Add';
import Item from '../../components/TodoItem/Item'

import { Searched } from '../../components/searched'
import { TodoContext } from '../../context/TodoContext'
import { useContext } from 'react';
import Counter from '../../components/CounterTodos/Counter';
import { Authcontext } from '../../context/AuthContext';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/notif/Error'
import ModalPortal from '../../components/Modal/ModalPortal';
import Modal from '../Modal'
import EmptyTodo from '../../components/EmptyTodo';
import Todo from '../todo/Todo';
interface Todo {
    id: any,
    title: string,
    completed: boolean
}
export default function AppUi() {
    const { setSearchValue,
        onComplete, onDelete,
        completedTodos, totalTodos,
        // todos, setTodos, 
        searchetTodos,
        loading, error,
        openModal, handleStateModal,
    } = useContext(TodoContext)
    const { userName } = useContext(Authcontext)
    return (
        <div className="w-[50%] h-[100vh] rounded-2xl flex flex-col gap-5 mx-auto p-3 overflow-hidden bg-transparent shadow-2xl shadow-indigo-500" >
            <Counter completedTodos={completedTodos} totalTodos={totalTodos} userName={userName} />
            <Searched setSearchValue={setSearchValue} />
            <Todo>
                {loading && <Loading />}
                {error && <Error />}
                {(!loading && searchetTodos.length == 0) && <EmptyTodo />}
                {!loading && searchetTodos.map((item: Todo) => (
                    <Item onCompleted={() => { onComplete(item) }} onDelete={() => { onDelete(item) }} todo={item} key={item.id} />
                ))}
            </Todo>
            <div className='flex justify-end items-center'>
                <Button onclickE={handleStateModal} content='add todo' icon={<AddIcon fontSize='large' />} />
            </div>
            {openModal &&
                <ModalPortal>
                    <Modal />
                </ModalPortal>
            }

        </div >
    )
}