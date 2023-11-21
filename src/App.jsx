import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from './components/PatientsList'

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {

  }, []) // No dependencies(empty array) means it will only be executed once when the component is ready

  // Save the patients in localStorage, turning patients array into string and synchronize state
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  },[patients])

  const deletePatient = id => {
    const patientsUpdated = patients.filter( patient => patient.id !== id);
    setPatients(patientsUpdated)

    console.log(patientsUpdated);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>

    </div>
  )
}

export default App
