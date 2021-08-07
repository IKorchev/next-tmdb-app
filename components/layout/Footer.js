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
    <footer className='py-6 mt-12 bg-gray-200'>
      <div className='container lg:px-24 mx-auto'>
        <h1 className='text-5xl text-center lg:text-left '>Moovy</h1>
        <div className='grid my-10 grid-cols-1 lg:grid-cols-2 '>
          <div className='flex flex-col text-center justify-between md:flex-row md:text-left'>
            {footerLinks.map((el) => (
              <div key={el.title} className='flex flex-col my-6 md:mt-0'>
                <h2 className='text-lg font-semibold'>{el.title}</h2>
                {el.links.map((item) => (
                  <a
                    key={item.name}
                    className='hover:underline text-gray-700 text-md'
                    href={item.url}>
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className='flex px-36 mx-auto py-4 md:px-4 lg:px-24'>
            <a  href=''>
              <TelegramIcon className='h-8 px-2 mx-2 text-blue-500 hover:opacity-70' />
            </a>
            <a href=''>
              <DiscordIcon className='h-8 px-2 mx-2 text-blue-400 hover:opacity-70' />
            </a>
            <a href=''>
              <FacebookIcon className='h-6 px-2 mx-2 text-blue-900 hover:opacity-70' />
            </a>
            <a href=''>
              <TwitterIcon className='h-6 px-2 mx-2 text-blue-500 hover:opacity-70' />
            </a>
            <a href=''>
              <InstagramIcon className='h-6 px-2 mx-2 text-gray-700 hover:opacity-70' />
            </a>
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
