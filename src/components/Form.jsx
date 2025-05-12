import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Error from "./Error";

// Form is reading patients, setPatients and patient from App.jsx
const Form = ({ patients, setPatients, patient, setPatient }) => {
  const { t } = useTranslation();

  // These first variables are empty at first, but can change with the alternate variables next to them when the state changes
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [dateAdmission, setDateAdmission] = useState("");
  const [dateDischarge, setDateDischarge] = useState("");
  const [symptoms, setSymptoms] = useState("");

  //Setting error as false
  const [error, setError] = useState(false);

  // Object.keys method is used to detect if the object is empty and if not, set(Name, Owner, Email, Date & Symptoms) variables are used to show the information back in the form when the user clicks on Edit button, allowing the user to make any changes to the patient
  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDateAdmission(patient.dateAdmission);
      setDateDischarge(patient.dateDischarge);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(33).substr(2); // Generate a random number, turn it to a string with a number between 2 and 36, and substract the first 2 digits('0' & '.')

    const date = Date.now().toString(33); // Same as above but instead of random numbers, the date

    return random + date; // Merge both 'ids' to generate an even stronger id and assign a completely different one to each patient
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validating Form
    if (
      [name, owner, email, dateAdmission, dateDischarge, symptoms].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    // Patient Object
    const patientObject = {
      name,
      owner,
      email,
      dateAdmission,
      dateDischarge,
      symptoms,
    };

    if (patient.id) {
      // Editing Patient
      patientObject.id = patient.id;

      // Iterating in patients array to catch the repeated ones(when editing), keep them in the same object and update the changes made to the patient
      const patientsUpdated = patients.map((patientState) =>
        patientState.id === patient.id ? patientObject : patientState
      );

      if (patientsUpdated.length === 0) {
        clearForm();
        return;
      }

      setPatients(patientsUpdated);
      setPatient({}); // Clear state in setPatient object after the changes are made
    } else {
      // New Patient
      patientObject.id = generateId();
      setPatients([...patients, patientObject]);
    }

    clearForm();
  };

  // Reset form
  const clearForm = () => {
    setError(false);
    setName("");
    setOwner("");
    setEmail("");
    setDateAdmission("");
    setDateDischarge("");
    setSymptoms("");
  };

  // Cancel Edit
  const cancelEdit = () => {
    setPatient({});
    clearForm();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">{t("form.title")}</h2>

      <p className="text-lg mt-5 text-center mb-10">
        {t("form.subtitle")} {""}
        <span className="text-indigo-600 font-bold">{t("form.manage")}</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error>{t("form.error")}</Error>}

        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            {t("form.petName")}
          </label>

          <input
            id="pet"
            type="text"
            placeholder={t("form.petNamePlaceholder")}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            {t("form.ownerName")}
          </label>

          <input
            id="owner"
            type="text"
            placeholder={t("form.ownerNamePlaceholder")}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            {t("form.email")}
          </label>

          <input
            id="email"
            type="email"
            placeholder={t("form.emailPlaceholder")}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="admission"
            className="block text-gray-700 uppercase font-bold"
          >
            {t("form.admissionDate")}
          </label>

          <input
            id="admission"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={dateAdmission}
            onChange={(e) => setDateAdmission(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="discharged"
            className="block text-gray-700 uppercase font-bold"
          >
            {t("form.dischargeDate")}
          </label>

          <input
            id="discharged"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={dateDischarge}
            onChange={(e) => setDateDischarge(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            {t("form.symptoms")}
          </label>

          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder={t("form.symptomsPlaceholder")}
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <div className="flex justify-center items-center gap-4 mt-5">
          <button
            type="button"
            className="bg-gray-400 w-full p-3 text-white uppercase font-bold hover:bg-gray-500 cursor-pointer transition-colors rounded-md"
            onClick={patient.id ? cancelEdit : clearForm}
          >
            {patient.id ? t("form.cancel") : t("form.clearForm")}
          </button>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
            value={patient.id ? t("form.editPatient") : t("form.addPatient")}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
