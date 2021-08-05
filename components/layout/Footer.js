import {
  InstagramIcon,
  TelegramIcon,
  DiscordIcon,
  FacebookIcon,
  TwitterIcon,
} from "../../assets/SocialIcons"
import footerLinks from "../../utils/footerLinks"
const Footer = () => {
  return (
    <footer className='py-6 px-12 mt-12 lg:px-36 bg-gray-200'>
      <div className='container mx-auto '>
        <h1 className='mb-16'>Moovy</h1>
        <div className='grid grid-cols-1 order-last lg:grid-cols-3 '>
          <div className='w-50'>
            <h1 className='text-2xl text-center my-5'>Social links</h1>
            <div className='flex justify-around'>
              <a href=''>
                <TelegramIcon className='h-8 text-blue-500 hover:opacity-70' />
              </a>
              <a href=''>
                <DiscordIcon className='h-8 text-blue-400 hover:opacity-70' />
              </a>
              <a href=''>
                <FacebookIcon className='h-6 text-blue-900 hover:opacity-70' />
              </a>
              <a href=''>
                <TwitterIcon className='h-6 text-blue-500 hover:opacity-70' />
              </a>
              <a href=''>
                <InstagramIcon className='h-6 text-gray-700 hover:opacity-70' />
              </a>
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-center justify-around col-span-2 mt-8'>
            {footerLinks.map((el) => (
              <div key={el.title} className='flex flex-col mt-8'>
                <h1 className='text-xl mb-1'>{el.title}</h1>
                {el.links.map((item) => (
                  <a key={item.name} className='hover:underline text-md' href={item.url}>
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className='text-center text-gray-500 mt-12'>
          Copyright &copy; ikorchev.com 2020{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
