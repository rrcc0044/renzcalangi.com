import Image from 'next/image';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';

const IndexPage = () => (
  <div className="px-2">
    <div className="flex flex-col gap-6 items-center">
      <Image
        src="/me.jpg"
        alt="Renz Calangi"
        width="180px"
        height="180px"
        objectFit="cover"
        className="rounded-full"
      />
      <h1 className="text-6xl font-bold">Renz Calangi</h1>
      <h2 className="text-3xl font-semi-bold opacity-70">I build web apps.</h2>
    </div>
    <div className="mt-14 flex flex-col gap-12 items-center max-w-2xl">
      <p className="text-lg opacity-70 text-center">
        I&apos;m a Full-stack web developer based in the 🇵🇭Philippines, with
        experience in Frontend, Backend and Devops. Currently working as a
        (Senior) Software Engineer for{' '}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.tribegroup.co/"
          className="font-bold underline underline-offset-4 decoration-2 hover:no-underline"
        >
          TRIBE
        </a>
      </p>
      <div className="flex flex-row gap-6">
        <Link href="/projects">
          <button className="bg-gray-100 hover:bg-gray-200 font-bold py-4 px-6 rounded-xl w-40 text-center">
            <p className="text-base">Projects 🧑‍🔬</p>
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl">
            <p className="text-base">Details about me &rarr;</p>
          </button>
        </Link>
      </div>
    </div>
    <div className="mt-20 flex flex-col gap-8 items-center max-w-2xl">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-lg opacity-70 text-center">
        I&apos;m interested in freelance opportunities - especially ambitious or
        large projects. Feel free to ask me anything!
      </p>
      <div className="flex flex-row gap-6">
        <Link href="mailto:me@renzcalangi.com">
          <a className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl w-40 text-center">
            <p className="text-base">Say hi! 👋</p>
          </a>
        </Link>
        <a
          href="/assets/Renz-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-gray-100 hover:bg-gray-200 font-bold py-4 px-6 rounded-xl w-40 text-center"
        >
          <p className="text-base">
            Resume <FaDownload size={14} className="inline" />
          </p>
        </a>
      </div>
    </div>
  </div>
);

export default IndexPage;
