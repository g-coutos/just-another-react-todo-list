import { toast } from "react-hot-toast";

export const toastSuccess = (message) => {
  return toast.success(message, {
    position: "bottom-center",
  });
};

export const toastError = (message) => {
  return toast.error(message, {
    position: "bottom-center",
  });
};

export const toastClearedList = (message) => {
  return toast(message, {
    position: "bottom-center",
    icon: "🗑️",
  });
};
