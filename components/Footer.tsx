import Link from 'next/link';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

const links = [
  {
    link: 'https://twitter.com/rrcc0044',
    icon: SiTwitter,
  },
  {
    link: 'https://github.com/rrcc0044',
    icon: SiGithub,
  },
  {
    link: 'https://www.linkedin.com/in/renzc/',
    icon: SiLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full px-5 pt-16 pb-12 ">
      <div className="grid justify-items-center grid-cols-4 gap-5 py-6">
        <Link href="/">
          <span className="font-bold">Home</span>
        </Link>
        <Link href="/about">
          <span className="font-bold">About</span>
        </Link>
        <Link href="/projects">
          <span className="font-bold">Projects</span>
        </Link>
        <Link href="/">
          <span className="font-bold">Contact</span>
        </Link>
      </div>
      <div className="grid justify-items-center grid-cols-3 gap-10 py-6 mb-4">
        {links.map(({ link, icon: Icon }) => (
          <Link key={link} href={link} target={"_blank"}>
            <span className="opacity-70 hover:opacity-100">
              <Icon size={22} />
            </span>
          </Link>
        ))}
      </div>
      <span className="text-sm opacity-90">
        © {new Date().getFullYear()} Renz Calangi
      </span>
    </footer>
  );
};

export default Footer;
