import React from 'react'
import Modal from 'react-modal';
import { Icon } from '@iconify/react';



interface ReactModalWrapperProps {
    children: React.ReactNode;
    button: JSX.Element;


}

function ReactModalWrapper({ children, button }: ReactModalWrapperProps) {



    const [isOPen, setIsOpen] = React.useState<boolean>(false);

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const buttonWithHandler = React.cloneElement(button, {
        onClick: handleButtonClick,
    });

    return (
        <>
            {buttonWithHandler}
            <Modal
                className=' flex overflow-y-auto overflow-x-hidden w-full justify-center z-50 bg-dark fixed inset-0 '
                isOpen={isOPen}
                preventScroll
            >
                <div className='relative max-w-[1366px] w-full'>
                    <button onClick={()=>setIsOpen(false)} className='absolute border-[1px] border-white p-[5px] top-[20px] right-[20px]  text-[24px] text-white'><Icon icon="mdi:close" className='' /></button>
                    {children}
                </div>
            </Modal>
        </>
    )
}

export default ReactModalWrapper