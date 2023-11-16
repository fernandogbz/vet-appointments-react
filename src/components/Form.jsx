import {useState, useEffect} from 'react';
import Error from './Error';

const Form = ( {patients, setPatients, patient} ) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() =>{
    if(Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }
  }, [patient])
  
  const generateId = () => {
    const random = Math.random().toString(33).substr(2);
    const date = Date.now().toString(33)

    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validating Form
    if([name, owner, email, date, symptoms].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    // Patient Object
    const patientObject = {
      name,
      owner,
      email,
      date,
      symptoms,
      id: generateId()
    }

    setPatients([...patients, patientObject])

    // Reset form
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSymptoms('')
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

      <h2 className="font-black text-3xl text-center">Book a vet appointment</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {''}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        { error && <Error>All fields are required</Error> }

        <div className="mb-5">
          <label 
          htmlFor="pet"
          className="block text-gray-700 uppercase font-bold">Pet Name</label>

          <input 
          id="pet"
          type="text"
          placeholder="Enter pet name"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
          htmlFor="owner"
          className="block text-gray-700 uppercase font-bold">Owner Name</label>

          <input
          id="owner"
          type="text"
          placeholder="Enter owner name"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
          htmlFor="email"
          className="block text-gray-700 uppercase font-bold">Email</label>

          <input
          id="email"
          type="email"
          placeholder="Email"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
          htmlFor="discharged"
          className="block text-gray-700 uppercase font-bold">Discharged on</label>

          <input
          id="discharged"
          type="date"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={date}
          onChange={(e) => setDate(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label
          htmlFor="symptoms"
          className="block text-gray-700 uppercase font-bold">Symptoms</label>
          
          <textarea
          id="symptoms"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe the symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
        value="Add Patient"/>
      </form>
    </div>
  )
}

export default Form
