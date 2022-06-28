import { toast } from "react-toastify";

interface Toast {
  type: string;
  message: string;
}

export const Toast = ({ type, message }: Toast) => {
  // TODO: TypeScript - No index signature with a parameter of type 'string' was found on type 'typeof toast'
  toast[type](message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
