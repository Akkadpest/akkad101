import React from 'react';

import schemaData from './schema.json';

const ReviewsSchema = () => {
  return (
    <>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      
      
      <div></div>
    </>
  );
};

export default ReviewsSchema;
