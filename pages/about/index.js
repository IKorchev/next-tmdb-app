import AboutLinks from '../../components/AboutLinks';
const About = () => {
  return (
    <div className='container mx-auto px-5 md:px-32'>
      <div className='flex flex-col lg:flex-row mt-12 '>
        <div className='flex flex-col rounded-lg shadow-2xl mb-12 lg:mb-0'>
          <h2 className='bg-gray-700 rounded-t-lg font-semibold py-2 text-white px-12'>FAQ</h2>
          <AboutLinks />
        </div>
        <div className='flex-grow px-12'>
          <h2>Welcome to our Movie Website</h2>
          <p className='mt-4'>
            We are a movie website dedicated to providing you with the latest and greatest in movies, TV shows, and other entertainment content. Our team of experts is passionate about movies and is committed to bringing you the best
            reviews, ratings, and news about your favorite films.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
