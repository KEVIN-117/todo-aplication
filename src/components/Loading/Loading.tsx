

function Loading() {
    return (
        <div className='flex flex-col gap-3'>
            <div role="status" className="w-[100%] flex-1 h-28 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-between gap-2">
                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                    <div className='flex-1 flex flex-col gap-3 justify-center items-center'>
                        <div className="w-[90%] h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                    </div>

                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="w-full h-auto p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-between gap-2">
                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                    <div className='flex-1 flex flex-col gap-3 justify-center items-center'>
                        <div className="w-[90%] h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                    </div>

                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="w-full h-auto p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-between gap-2">
                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                    <div className='flex-1 flex flex-col gap-3 justify-center items-center'>
                        <div className="w-[90%] h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                    </div>

                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="w-full h-auto p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-between gap-2">
                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                    <div className='flex-1 flex flex-col gap-3 justify-center items-center'>
                        <div className="w-[90%] h-3 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                    </div>

                    <div className="h-12 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading