import Link from 'next/link';

const Nav = () => {
  return (
    <div className="w-full flex justify-between py-10 px-10">
      <Link href="/">
        <span className="font-medium hover:transition-opacity hover:opacity-70">
          Renz Calangi
        </span>
      </Link>

      <Link href="mailto:me@renzcalangi.com">
        <span className="font-medium hover:transition-opacity hover:opacity-70">
          Contact
        </span>
      </Link>
    </div>
  );
};

export default Nav;
