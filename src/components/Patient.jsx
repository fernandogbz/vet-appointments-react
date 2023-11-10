const Patient = ({patient}) => {

  const {name, owner, email, date, symptoms} = patient

  console.log(patient)
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Pet Name: {''}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Owner Name: {''}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Discharged on: {''}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
    </div>
  )
}

export default Patient
