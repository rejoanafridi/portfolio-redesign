import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Pc - Builder',
    description:
      'Pc Builder is A wide selection of electronic products from various brands A user-friendly interface that makes it easy to find and purchase products. It includes a variety of features that search for products, compare products, pc builds, and filtering products',
    image: '/pc-builder.png',
    status: 'on going project',
    github: 'https://github.com/rejoanafridi/pc-builders',
    link: 'https://pc-builders-rejoan.vercel.app/',
  },
  {
    name: 'Mini-Commerce',
    description:
      'This is mini version of E-commerce. There I added some of ecommerce functionality',
    status: 'complete',
    image: '/mini-commerce.png',
    github: 'https://github.com/rejoanafridi/mini-commerce',
    link: 'https://mini-commerce-rejaon-islam.netlify.app/',
  },
  {
    name: 'Book Store',
    description:
      'Book Store CRUD functionality. Here user can add book then its showing in the page also user can edit and delete. Tools: React, Redux, TailWind Css',
    image: '/book-store.png',
    status: 'Complete',
    github: 'https://github.com/rejoanafridi/book-store',
    link: 'https://book-store-drab.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className=' md:w-1/2'>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    </Link>
                  </div>
                  <div className='mt-8 md:w-1/2'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {project.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4'>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
