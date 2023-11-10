const Patient = ({patient}) => {
  console.log(patient)
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Pet Name: {''}
        <span className="font-normal normal-case">{patient.name}</span>
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
  )
}

export default Patient
