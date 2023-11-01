/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useState } from 'react'
import { Todo } from '../interface/Todo'
import { v4 as uuid } from 'uuid'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = createContext<any>(undefined)

function TodoProvider({ children }: { children: ReactNode }) {
    const { item: todos,
        saveItems: setTodos,
        loading,
        error, } = useLocalStorage('todos', [])
    const [completed, setCompleted] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [searchValue, setSearchValue] = useState<string>('')

    const onComplete = (data: Todo) => {
        const temp: Todo[] = [...todos]
        const findItem = temp.find(todo => data.id === todo.id)
        if (findItem)
            Object.assign(findItem, { completed: !findItem.completed })
        setTodos(temp)
    }
    const onDelete = (data: Todo) => {
        const temp = [...todos]
        const findItem = temp.filter((todo) => todo.id != data.id)
        setTodos(findItem)

    }
    const totalTodos = todos.length
    const completedTodos = todos.filter((todo: Todo) => !!todo.completed).length
    const searchetTodos = todos.filter((todo: Todo) => { return todo.title.toLowerCase().includes(searchValue.toLowerCase()) })
    const handleStateModal = () => {
        setOpenModal(!openModal)
    }
    const createtodo = (value: string) => {
        const temp = todos
        const newtodo: Todo = {
            id: uuid(),
            title: value,
            completed: false
        }
        temp.unshift(newtodo)
        setTodos(temp)
    }
    const contextValue = {
        completed, setCompleted, onComplete, onDelete,
        searchValue, setSearchValue,
        todos, setTodos, searchetTodos,
        openModal, handleStateModal,
        loading, error,
        completedTodos, totalTodos,
        createtodo
    }

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext }