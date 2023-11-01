import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
function Modal() {
    const { register, handleSubmit } = useForm()
    const { handleStateModal, createtodo, openModal } = useContext(TodoContext)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        createtodo(data.name)
        handleStateModal(!openModal)
    }
    return (
        <>
            <div className={` absolute w-full max-w-lg shadow-3xl dark:bg-blue-950 `}>
                <form onSubmit={handleSubmit(onSubmit)} className=" shadow-md text-white rounded flex flex-col gap-2 px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Title
                        </label>
                        <input
                            {...register('name', { required: true })}
                            autoComplete="off"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Title"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button type="submit" className="uppercase flex-1 bg-sky-600 justify-center items-center px-2 py-3 rounded-2xl">registrar</button>
                        <button onClick={handleStateModal} type="submit" className="uppercase flex-1 bg-red-600 justify-center items-center px-2 py-3 rounded-2xl">cancelar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Modal