import React from 'react'
export default function Todo({ children }: { children: React.ReactNode }) {
    return (
        <div className={'flex h-full flex-col gap-8 p-2 borde rounded-2xl scroll-animation glass-bg border-collapse border-4 border-sky-500 overflow-y-scroll'}>{children}</div>
    )
}