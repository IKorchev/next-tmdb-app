import AboutLinks from "../../components/AboutLinks"
const Website = () => {
  return (
    <div className='container mx-auto px-32'>
      <div className='flex flex-col lg:flex-row mt-12 '>
        <div className='flex flex-col rounded-lg shadow-2xl mb-12 lg:mb-0'>
          <h2 className='bg-gray-700 rounded-t-lg font-semibold py-2 text-white px-12'>
            FAQ
          </h2>
          <AboutLinks />
        </div>
        <h1 className='text-center flex-grow'>Website</h1>
      </div>
    </div>
  )
}

export default Website
