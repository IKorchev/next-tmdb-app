import AboutLinks from '../../components/AboutLinks';
const General = () => {
  return (
    <div className='container mx-auto px-32'>
      <div className='flex flex-col lg:flex-row mt-12 '>
        <div className='flex flex-col rounded-lg shadow-2xl mb-12 lg:mb-0'>
          <h2 className='bg-gray-700 rounded-t-lg font-semibold py-2 text-white px-12'>FAQ</h2>
          <AboutLinks />
        </div>
        <div className='flex-grow px-12'>
          <h3 className='text-2xl'>Our team</h3>
          <p className='mt-4'>
            We believe that movies bring people together, and we have created a community of movie lovers who share their opinions, recommendations, and experiences with one another. Our forums are a place where you can discuss movies, TV
            shows, and other entertainment content with like-minded people from around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default General;
