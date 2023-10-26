import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';

import { getPosts } from 'posts';

const About = ({ experience }) => {
  if (!experience) {
    return <></>;
  }

  const { data } = experience;

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.description} />
      </Head>
      <div className="w-3/4 max-w-5xl flex flex-col gap-y-2 md:flex-row">
        <div>
          <Link href="/about">
            <span className=" font-bold text-5xl mr-6 cursor-pointer opacity-70 hover:opacity-100">
              &larr;
            </span>
          </Link>
        </div>
        <div className="grow-1">
          <h1 className="font-bold text-5xl mb-4">{data?.title}</h1>
          <p className="font-bold text-4xl text-slate-500">@{data?.company}</p>
          <div className="mt-6 flex gap-y-2 flex-col md:flex-row md:gap-x-8">
            <span className="text-lg">📅 {data?.duration}</span>
            <a
              href={data?.link}
              className="text-lg font-medium hover:underline underline-offset-4 flex items-center gap-2"
            >
              <FaLink size={16} className="relative" />
              {data?.link}
            </a>
          </div>
          <div className="relative">
            <div className="w-full relative mt-8 h-48">
              <Image
                fill
                className="w-full rounded-md object-cover"
                src={data?.banner}
                alt={data?.company}
              />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg border-neutral-200 border-2">
              <Image
                src={data?.icon}
                alt={`${data?.company} icon`}
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="mt-20 px-4 py-2 bg-gray-100 rounded-md">
            {data?.introduction}
          </div>

          <section className="mt-8 md:border-l md:border-gray-200 md:pl-6 flex justify-center">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-3xl md:text-base font-semibold ">Projects</h2>
              <div className="md:col-span-3">
                <ul role="list" className="space-y-16">
                  {data?.projects?.map((project) => (
                    <li
                      key={`${project.tile}`}
                      className="group relative flex flex-col items-start"
                    >
                      <h3 className="text-base font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 whitespace-pre-wrap">
                        {project.description}
                      </p>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600">
                        <span className="font-semibold">Technologies: </span>
                        {project.tech?.map((item, index, { length }) =>
                          length - 1 === index ? `${item}` : `${item}, `,
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const experiences = await getPosts('experiences');

  return {
    paths: experiences.map(({ data: { slug } }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const experiences = await getPosts('experiences');

  const experience = experiences.find(
    (experience) => experience?.data?.slug === params?.slug,
  );

  return {
    props: {
      experience,
    },
  };
};

export default About;
