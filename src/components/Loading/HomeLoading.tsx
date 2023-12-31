import Logo from "../../icons/Logo"

function HomeLoading() {
    return (
        <div className="grid gap-10">
            <div aria-label="Loading..." className="relative flex justify-center items-center" role="status">
                <svg className="animate-spin ease-in-out duration-300 delay-1000 w-[60%] h-[60%] stroke-blue-500" viewBox="0 0 256 256">
                    <line
                        x1={128}
                        y1={32}
                        x2={128}
                        y2={64}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1="195.9"
                        y1="60.1"
                        x2="173.3"
                        y2="82.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1={224}
                        y1={128}
                        x2={192}
                        y2={128}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1="195.9"
                        y1="195.9"
                        x2="173.3"
                        y2="173.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1={128}
                        y1={224}
                        x2={128}
                        y2={192}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1="60.1"
                        y1="195.9"
                        x2="82.7"
                        y2="173.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1={32}
                        y1={128}
                        x2={64}
                        y2={128}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1="60.1"
                        y1="60.1"
                        x2="82.7"
                        y2="82.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                </svg>
                <div className="absolute text-center">
                    <Logo />
                    <h1 className="text-2xl text-sky-600 font-extrabold">Loading...</h1>
                </div>
            </div>
        </div>


    )
}

export default HomeLoading