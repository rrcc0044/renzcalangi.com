import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex justify-between py-10 px-10">
      <Link href="/">
        <a className="font-medium hover:transition-opacity hover:opacity-70">
          Renz Calangi
        </a>
      </Link>

      <Link href="mailto:renzccalangi@gmail.com">
        <a className="font-medium hover:transition-opacity hover:opacity-70">
          Contact
        </a>
      </Link>
    </div>
  );
};

export default Nav;
