import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Blog from './Blog';

const Blogs = () => {
  const blogs = useLoaderData();
  useTitle('News');
  return (
    <div className='lg:p-20 p-4 bg-slate-50'>
      <div className='text-center pb-12'>
        <p className='uppercase text-3xl font-semibold'>Latest <span className='text-primary'>News & Blogs</span></p>
      </div>

      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
        {
          blogs.slice(0, 6).map(blog => <Blog
            key={blog._id}
            blog={blog}
          ></Blog>)
        }
      </div>

      <div className='flex justify-center pt-12'>
        <button className='btn btn-primary text-white'>Read All Blogs</button>
      </div>
    </div>
  );
};

export default Blogs;