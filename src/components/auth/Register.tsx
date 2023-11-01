/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { Authcontext } from '../../context/AuthContext'
import { useContext } from 'react'

export function Register() {
    const { register, handleSubmit } = useForm()
    const { singUp } = useContext(Authcontext)

    const onSubmit = (data: any) => singUp(data)


    return (
        <>
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit(onSubmit)} className="dark:bg-blue-950 shadow-md text-white rounded flex flex-col gap-2 px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            {...register('name', { required: true })}
                            autoComplete="off"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <button type="submit" className="uppercase flex bg-sky-600 justify-center items-center px-2 py-3 rounded-2xl">registrar usuario</button>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    ©2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </>
    )
}
