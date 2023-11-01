import React from 'react'
import { createPortal } from 'react-dom'

function ModalPortal({ children }: { children: React.ReactNode }) {
    const modalRoot = document.getElementById('modal');

    if (!modalRoot) {
        return null;
    }
    return <div className='relative h-full w-full '>
        {createPortal(
            <div className='absolute glass z-2 w-full top-0 left-0 right-0 bottom-0 p-4 overflow-hidden flex items-center justify-center'>
                {children}
            </div>,
            modalRoot
        )}
    </div>
}

export default ModalPortal