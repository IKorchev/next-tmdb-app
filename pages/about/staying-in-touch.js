import AboutLinks from '../../components/AboutLinks';

const stayingintouch = () => {
  return (
    <div className='container mx-auto px-32'>
      <div className='flex flex-col lg:flex-row mt-12 '>
        <div className='flex flex-col rounded-lg shadow-2xl mb-12 lg:mb-0'>
          <h2 className='bg-gray-700 rounded-t-lg font-semibold py-2 text-white px-12'>FAQ</h2>
          <AboutLinks />
        </div>
        <div className='flex-grow px-12'>
          <h2>Contact us</h2>
          <p className='mt-4'>
            If you have any questions, comments, or suggestions, please feel free to contact us. We are always happy to hear from our users and are committed to providing the best possible experience for movie lovers. You can contact us
            through our website, social media channels, or by email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default stayingintouch;
