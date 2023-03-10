import React from 'react';
import './service.css';
const Service = ({ service }) => {
  const { title, description, service_thumbnail } = service;
  return (
    <>
      <div className='flex justify-center'>
        <div className="icon bg-base-200 hover:bg-primary duration-500">
          <img src={service_thumbnail} alt="Shoes" />
        </div>
      </div>
      <div className="text-center p-4">
        <h2 className="text-center text-xl font-semibold text-warning">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Service;