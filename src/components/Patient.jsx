import { useTranslation } from "react-i18next";

const Patient = ({ patient, setPatient, deletePatient }) => {
  const { t } = useTranslation();

  const { name, owner, email, dateAdmission, dateDischarge, symptoms, id } =
    patient; // Destructuring patient object

  const handleDelete = () => {
    const response = confirm(t("patient.confirm"));

    if (response) {
      deletePatient(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {t("patient.petName")}: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {t("patient.owner")}: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {t("patient.email")}: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {t("patient.admissionDate")}: {""}
        <span className="font-normal normal-case">{dateAdmission}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {t("patient.dischargeDate")}: {""}
        <span className="font-normal normal-case">{dateDischarge}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {t("patient.symptoms")}: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
          onClick={() => setPatient(patient)}
        >
          {t("patient.edit")}
        </button>

        <button
          type="button"
          className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
          onClick={handleDelete}
        >
          {t("patient.delete")}
        </button>
      </div>
    </div>
  );
};

export default Patient;
