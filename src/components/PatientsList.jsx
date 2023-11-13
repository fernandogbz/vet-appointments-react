import Patient from "./Patient"


const PatientsList = ({patients}) => {
  console.log(patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">

    {patients && patients.length ? "There are patients" : "There are no patients"}

      <h2 className="font-black text-3xl text-center">Patients List</h2>

      <p className="text-xl mt-5 mb-10 text-center">
      Manage your {''}
        <span className="text-indigo-600 font-bold">Patients and Appointments</span>
      </p>

      { patients.map( patient => (
        <Patient 
          key={patient.id}
          patient={patient}
          />
        )
      ) 
    }
    
    </div>
    )
}

export default PatientsList