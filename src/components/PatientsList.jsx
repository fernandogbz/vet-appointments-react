const PatientsList = () => {
  return (
    <div className="mid:w-1/2 lg:w-3/5">

    <h2 className="font-black text-3xl text-center">Patients List</h2>

    <p className="text-xl mt-5 mb-10 text-center">
      Manage your {''}
      <span className="text-indigo-600 font-bold">Patients and Appointments</span>
    </p>

    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Pet Name: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Owner Name: {''}
        <span className="font-normal normal-case">Fer</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email {''}
        <span className="font-normal normal-case">email@email.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Discharged on: {''}
        <span className="font-normal normal-case">October 4th, 2023</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
        <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus culpa molestias animi eius vel suscipit placeat optio. Magni excepturi non quisquam nulla!</span>
      </p>
    </div>

    </div>
    )
}

export default PatientsList