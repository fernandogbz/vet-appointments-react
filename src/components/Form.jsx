const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Book a vet appointment</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {''}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div>
          <label className="block text-gray-700 uppercase font-bold">Pet Name</label>
          <input type="text" placeholder="Enter name"/>
        </div>
      </form>
    </div>
  )
}

export default Form
