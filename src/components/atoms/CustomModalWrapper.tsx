import React from 'react';

interface CustomModelWrapperProps {
  children: React.ReactNode;
  button: JSX.Element;
}

function CustomModalWrapper({ children, button }: CustomModelWrapperProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const buttonWithHandler = React.cloneElement(button, {
    onClick: handleButtonClick,
  });

  return (
    <>
    {buttonWithHandler}
      {open && (
        <div className='fixed inset-0 w-full max-h-dvh  bg-dim flex items-center justify-center'>
          <div className='bg-white p-4 rounded shadow-lg max-w-lg w-full mx-4'>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default CustomModalWrapper;
