import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getPosts, IPost } from 'posts';
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

interface IProps {
  experiences: IPost[];
}

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

const AboutPage = ({ experiences }: IProps) => {
  return (
    <div>
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
          {experiences?.map(({ data }) => (
            <Link href={`/about/${data.slug}`} key={data?.slug}>
              <div className="px-10 py-5 border-b-2 border-gray-100 w-full group flex gap-10 hover:shadow-sm cursor-pointer items-center">
                <div className="grow max-w-xl">
                  <p>
                    <span className="font-bold text-lg pr-4">
                      {data?.company}
                    </span>
                    <span className="text-sm tracking-wider opacity-80 align-text-bottom">
                      {data?.duration}
                    </span>
                  </p>
                  <p className="opacity-70 pt-4">{data?.caption}</p>
                </div>
                <p className="text-2xl opacity-50 group-hover:opacity-100">
                  &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let experiences = await getPosts('experiences');
  experiences = [...experiences].sort((a, b) => a?.data?.order - b?.data.order);

  return {
    props: {
      experiences,
    },
  };
};

export default AboutPage;
