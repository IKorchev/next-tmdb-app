import Link from 'next/link';
import { useRouter } from 'next/router';
const paths = [
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/about/staying-in-touch',
    title: 'Staying In Touch',
  },
  {
    url: '/about/general',
    title: 'General',
  },
  {
    url: '/about/mission',
    title: 'Our mission',
  },
];

const AboutLinks = () => {
  const router = useRouter();

  return (
    <div className='p-5 w-72'>
      {paths.map((el) => (
        <Link key={el.title} href={el.url} passHref>
          <h3 className={`text-md cursor-pointer hover:text-gray-500 mt-3 ${router.pathname == el.url ? 'text-blue-700 hover:text-blue-600' : ''} `}>{el.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default AboutLinks;
