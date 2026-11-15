import Link from "next/link";
import React from "react";

// JSON data for the locations
const locations = [
  { name: "Pest Control in JLT", url: "/pest-control-jlt" },
  { name: "Pest Control in Dubai Marina", url: "/pest-control-dubai-marina" },
  { name: "Pest Control in Tecom", url: "/pest-control-tecom" },
  { name: "Pest Control in Al Barsha Dubai", url: "/pest-control-in-al-barsha" },
  { name: "Pest Control in International City", url: "/pest-control-international-city" },
  { name: "Pest Control in Bur Dubai", url: "/pest-control-bur-dubai" },
  { name: "Pest Control in Al Qusais", url: "/pest-control-al-qusais" },
  { name: "Pest Control in Discovery Gardens", url: "/pest-control-discovery-gardens" },
  { name: "Pest Control in JVC", url: "/" },
  
  
  { name: "Pest Control in Silicon Oasis - DSO", url: "/pest-control-silicon-oasis" },


  { name: "Pest Control in Al Daman", url: "/pest-control-in-al-daman" },
  { name: "Pest Control in Al faqa Dubai ", url: "/pest-control-in-al-faqa" },
  { name: "Pest Control in Al Habtoor Dubai", url: "/pest-control-in-al-habtoor-city" },
  { name: "Pest Control in Al Hudaiba Dubai", url: "/pest-control-in-al-hudaiba" },
  { name: "Pest Control in Al Jadaf Dubai", url: "/pest-control-in-al-jadaf" },
  { name: "Pest Control in Al Jafiliya Dubai", url: "/pest-control-in-al-jafiliya" },
  { name: "Pest Control in Karama Dubai", url: "/pest-control-in-al-karama" },
  { name: "Pest Control in AL Khail height ", url: "/pest-control-in-al-khail-heights"},
  { name: "Pest Control in Al Khawaneej Dubai ", url: "/pest-control-in-al-khawaneej"},
  { name: "Pest Control in Al Mamzar Dubai", url: "/pest-control-in-al-mamzar" },
  { name: "Pest Control in Al Manara jumeriah ", url: "/pest-control-in-al-manara" },
  { name: "Pest Control in Al Mizhar Dubai", url: "/pest-control-in-al-mizhar" },
 
  
  
  
 
  
  
  
  
  
 
  
  
  
];

const AdditionallyServing = () => {
  return (
    <div className="container">
      <p className="d-inline-flex gap-1">
        <button
          className="btn btn-success add-servers"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Additionally serving in
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body d-block">
          {locations.map((location, index) => (
            <Link href={location.url} key={index} className="me-2 link-hover">
              {location.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionallyServing;
