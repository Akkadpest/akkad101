import React from 'react';
import Insectsdata from './insects.json'
import Link from 'next/link';
const Fourfour= ({ insects , title ,descriptionTitle,headertitle}) => {
  return (
    <div className="container py-4">
      <h2>{headertitle}</h2>
        <h3>{title}</h3>
        <p>{descriptionTitle}</p>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {Insectsdata[insects].map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100">
            <Link href={item.treatmenturl}>
              <img src={item.image} className="card-img-top p-5" alt={item.title} /></Link>
              <div className="card-body">
           <Link href={item.treatmenturl}>
                <h5 className="card-title mt-3"> UAE Govermental Site <strong><br />{item.title}</strong></h5>
                <p className="mt-4">Organization Detail <strong>{item.description}</strong></p>
                <p>Contact number <strong>{item.phone}</strong> </p>
          </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fourfour;
