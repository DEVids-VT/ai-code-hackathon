import { Bounce, toast, ToastOptions, TypeOptions } from 'react-toastify';

const commonOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  transition: Bounce,
};

export const useToastNotification = () => {
  const emitToast = (
    content: string,
    type: TypeOptions,
    customOptions?: ToastOptions
  ) => {
    toast(content, {
      ...commonOptions,
      ...customOptions,
      type,
    });
  };

  return {
    emitToast,
  };
};
