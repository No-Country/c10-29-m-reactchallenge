import { toast } from "react-toastify";

export const toastSuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};

export const toastError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};

export const toastWarning = (message) => {
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};
