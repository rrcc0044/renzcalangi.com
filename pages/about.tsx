import { FaPython, FaReact } from 'react-icons/fa';
import {
  SiAmazonaws,
  SiCypress,
  SiFastapi,
  SiFlask,
  SiNextdotjs,
  SiPostgresql,
  SiPytest,
  SiRedux,
  SiReduxsaga,
  SiTypescript,
} from 'react-icons/si';

const AboutPage = () => {
  const technologies = [
    {
      icon: SiTypescript,
      link: 'https://www.typescriptlang.org/',
    },
    {
      icon: FaReact,
      link: 'https://reactjs.org/',
    },
    {
      icon: SiNextdotjs,
      link: 'https://nextjs.org/',
    },
    {
      icon: SiRedux,
      link: 'https://redux.js.org/',
    },
    {
      icon: SiReduxsaga,
      link: 'https://redux-saga.js.org/',
    },
    {
      icon: SiCypress,
      link: 'https://www.cypress.io/',
    },
    {
      icon: FaPython,
      link: 'https://www.python.org/',
    },
    {
      icon: SiPytest,
      link: 'https://docs.pytest.org/',
    },
    {
      icon: SiFlask,
      link: 'https://flask.palletsprojects.com/',
    },
    {
      icon: SiFastapi,
      link: 'https://fastapi.tiangolo.com/',
    },
    {
      icon: SiPostgresql,
      link: 'https://www.postgresql.org/',
    },
    {
      icon: SiAmazonaws,
      link: 'https://aws.amazon.com/',
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-4xl text-center font-bold">Technologies I use</h1>
        <div className="grid grid-cols-6 gap-1 justify-items-center mt-8 px-4">
          {technologies.map(({ icon: Icon, link }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="w-24 h-24 rounded hover:shadow-md cursor-pointer flex items-center justify-center"
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20 w-full">
        <h1 className="text-4xl text-center font-bold">Work Experience</h1>
        <div className="mt-8">
          <div className="px-10 py-5 border-b-2 border-gray-100 w-full group flex gap-10 hover:shadow-lg cursor-pointer items-center">
            <div className="grow max-w-xl">
              <p>
                <span className="font-bold text-lg pr-4">TRIBEGROUP</span>
                <span className="text-sm tracking-wider opacity-80 align-text-bottom">
                  2019 - Now
                </span>
              </p>
              <p className="opacity-70 pt-4">
                Built a Marketplace for Creators to showcase their content with
                React, Typescript and Python.
              </p>
            </div>
            <p className="text-2xl opacity-50 group-hover:opacity-100">
              &rarr;
            </p>
          </div>
          <div className="px-10 py-5 border-b-2 border-gray-100 w-full group flex gap-10 hover:shadow-lg cursor-pointer items-center">
            <div className="grow max-w-xl">
              <p>
                <span className="font-bold text-lg pr-4">
                  YOYO Holdings Pte. Ltd.
                </span>
                <span className="text-sm tracking-wider opacity-80 align-text-bottom">
                  2017 - 2018
                </span>
              </p>
              <p className="opacity-70 pt-4">
                Built the service layer that powers YOYO&apos;s product suite
                using Python.
              </p>
            </div>
            <p className="text-2xl opacity-50 group-hover:opacity-100">
              &rarr;
            </p>
          </div>
          <div className="px-10 py-5 border-b-2 border-gray-100 w-full group flex gap-10 hover:shadow-lg cursor-pointer items-center">
            <div className="grow max-w-xl">
              <p>
                <span className="font-bold text-lg pr-4">PawnHero</span>
                <span className="text-sm tracking-wider opacity-80 align-text-bottom">
                  2016 - 2017
                </span>
              </p>
              <p className="opacity-70 pt-4">Worked as a PHP Developer.</p>
            </div>
            <p className="text-2xl opacity-50 group-hover:opacity-100">
              &rarr;
            </p>
          </div>
          <div className="px-10 py-5 border-b-2 border-gray-100 w-full group flex gap-10 hover:shadow-lg cursor-pointer items-center">
            <div className="grow max-w-xl">
              <p>
                <span className="font-bold text-lg pr-4">
                  YOYO Holdings Pte. Ltd.
                </span>
                <span className="text-sm tracking-wider opacity-80 align-text-bottom">
                  2015 - 2016
                </span>
              </p>
              <p className="opacity-70 pt-4">
                Worked as a Web Developer using Angular and Python.
              </p>
            </div>
            <p className="text-2xl opacity-50 group-hover:opacity-100">
              &rarr;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
