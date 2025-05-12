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
