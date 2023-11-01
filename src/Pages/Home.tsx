import { Suspense, lazy } from 'react'
import { useContext } from 'react'
import { Register } from '../components/auth/Register'
import { Authcontext } from '../context/AuthContext'
import NavBar from '../layout/NavBar'
import HomeLoading from '../components/Loading/HomeLoading'

const AppUi = lazy(() => import('../layout/app'))
function Home() {
    const { userName } = useContext(Authcontext)
    return (
        <div className='overflow-hidden'>

            {!userName && <article className='grid gap-10'>
                <header >
                    <NavBar />
                </header>
                <main className='text-center gap-4 grid'>
                    <h1 className='text-2xl font-bold text-indigo-500'>
                        Listo para Ser Productivo
                    </h1>
                    <p className='text-xl font-semibold text-sky-500'>"Listo para un día productivo. ¡Bienvenido a tu aplicación de gestión de tareas!"</p>
                </main>
                <div className='flex justify-center items-center'>
                    <Register />
                </div>
            </article>}
            {userName &&
                <Suspense fallback={<HomeLoading />}>
                    <AppUi />
                </Suspense>
            }

        </div>


    )
}

export default Home