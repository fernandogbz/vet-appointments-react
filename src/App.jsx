import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from './components/PatientsList'

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    console.log('component ready or patients changed')
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
