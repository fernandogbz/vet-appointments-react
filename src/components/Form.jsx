const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Book a vet appointment</h2>

      <p className="text-lg mt-5 text-center">
        Add Patients and {''}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form>
        <div>
          <label>Pet Name</label>
          <input type="text" placeholder="Enter name"/>
        </div>
      </form>
    </div>
  )
}

export default Form
