import { User } from "../../interface/User"

function Counter({ completedTodos, totalTodos, userName }: { completedTodos: number, totalTodos: number, userName: User }) {

    return (
        <div className="text-center ">
            <h3 className="text-2xl capitalize text-sky-400">¡Bienvenido a tu lista de tareas!
                <span className="uppercase mx-5 text-sky-500 font-bold">{userName.name}</span>
                Estamos aquí para ayudarte a mantenerte organizado.</h3>
            <p className="text-slate-500 capitalize"> as completado {completedTodos} de {totalTodos} todos</p>
        </div>
    )
}

export default Counter