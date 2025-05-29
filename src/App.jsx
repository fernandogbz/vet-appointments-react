import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";
import PatientsTable from "./components/PatientsTable";
import { Toggle } from "./components/ui/toggle";
import { LayoutGrid, List } from "lucide-react";

function App() {
  const { i18n } = useTranslation();
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLocalStorage =
        JSON.parse(localStorage.getItem("patients")) ?? []; // Getting patients array from localStorage, turning it into an array, and if there isn't anything in localStorage then add an empty array

      setPatients(patientsLocalStorage); //patientsLocalStorage added to state
    };

    getLocalStorage();
  }, []); // No dependencies(empty array) means it will only be executed once when the component is ready

  // Save the patients in localStorage, turning patients array into string and synchronize state
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const patientsUpdated = patients.filter((patient) => patient.id !== id);
    setPatients(patientsUpdated);

    console.log(patientsUpdated);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="fixed top-4 right-4">
        <button
          onClick={() => changeLanguage("en")}
          className="bg-blue-500 text-white px-4 py-2 rounded-l-md hover:bg-blue-600"
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          ES
        </button>
      </div>
      <Header />

      <div className="mt-12 md:flex items-start">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <div className="flex-1">
          <div className="absolute right-20 mb-4 pr-4">
            <Toggle
              pressed={isGridView}
              onPressedChange={setIsGridView}
              aria-label="Toggle view"
              className="data-[state=on]:bg-indigo-600 data-[state=on]:text-white"
            >
              {isGridView ? (
                <LayoutGrid className="h-6 w-6" />
              ) : (
                <List className="h-6 w-6" />
              )}
            </Toggle>
          </div>
          {isGridView ? (
            <PatientsTable
              patients={patients}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ) : (
            <PatientsList
              patients={patients}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
