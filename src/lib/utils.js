import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleDelete = (t, deletePatient, id) => {
  const response = confirm(t("patient.confirm"));

  if (response) {
    deletePatient(id);
  }
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return newDate.toLocaleDateString("es-ES", options);
};
