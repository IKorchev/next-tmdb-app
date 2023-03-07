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
          <h3 className='text-2xl'>Our mission</h3>
          <p className='mt-4'>
            Our Mission Our mission is to help movie lovers find the best films to watch and keep them up to date with the latest movie news. We believe that movies are a form of art that can inspire, educate, and entertain people from all
            walks of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
