import ForwardIcon from '@mui/icons-material/Forward';

function EmptyTodo() {
    return (
        <>
            <div role="status" className="max-w-full h-full gap-4  text-center p-4 space-y-4 border border-gray-200  divide-gray-200 rounded shadow animate-none dark:divide-gray-700 dark:border-gray-700">
                <div className="flex flex-1 items-center justify-between gap-2">
                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                    <div className='flex-1 flex flex-col gap-3 justify-center items-center'>
                        <div className="w-[90%] h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                        <div className="w-[85%] h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div className="w-[90%] h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                    </div>
                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                </div>
                <div className="uppercase flex-1 text-2xl pt-10">Crea tu nuevo todo</div>
                <div className="flex-1 flex justify-end items-center animate-bounce font-extrabold ">
                    <ForwardIcon style={{ transform: 'rotate(80deg)', fontSize: '5em' }} />
                </div>
            </div>


        </>
    )
}

export default EmptyTodo