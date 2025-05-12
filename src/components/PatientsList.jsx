import { useTranslation } from "react-i18next";
import Patient from "./Patient";

const PatientsList = ({ patients, setPatient, deletePatient }) => {
  const { t } = useTranslation();

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            {t("patientsList.title")}
          </h2>

          <p className="text-xl mt-5 text-center mb-10">
            {t("patientsList.subtitle")}
            <span className="text-indigo-600 font-bold">
              {t("patientsList.subtitleSpan")}
            </span>
          </p>

          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            {t("patientsList.noPatients")}
          </h2>

          <p className="text-xl mt-5 text-center mb-10">
            {t("patientsList.addPatient")}
            <span className="text-indigo-600 font-bold">
              {t("patientsList.addPatientSpan")}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientsList;
