import { FaPython, FaReact } from 'react-icons/fa';
import {
  SiAmazonaws,
  SiCypress,
  SiDjango,
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
      icon: SiDjango,
      link: 'https://www.djangoproject.com/',
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
        <h1 className="text-4xl font-bold">Technologies I frequently use</h1>
        <div className="grid grid-cols-6 gap-1 justify-items-center mt-8">
          {technologies.map(({ icon: Icon, link }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="w-full h-16 rounded hover:shadow-xl cursor-pointer flex items-center justify-center"
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
