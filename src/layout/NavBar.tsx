import Logo from '../icons/Logo'

function NavBar() {
    return (
        <div className='flex flex-col md:flex-row md:justify-between justify-center items-center w-full container mx-auto'>
            <div className=''><Logo /></div>
        </div>
    )
}

export default NavBar