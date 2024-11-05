import React from "react";
import "./BrandsSection.css";
import logo from "../src/images/intel logo.jpg";

const BrandsSection = () => {
  const brands = [
    { id: 1, name: "Logo Ipsum", src: logo },
    { id: 2, name: "Logo Ipsum", src:  logo  },
    { id: 3, name: "Logo Ipsum", src:  logo  },
    { id: 4, name: "Logo Ipsum", src:  logo  },
    { id: 5, name: "rohit", src:  logo  },
    { id: 6, name: "Logo Ipsum", src:  logo  },
    { id: 7, name: "Logo Ipsum", src:  logo  },
    { id: 8, name: "kamli", src:  logo  },
    { id: 9, name: "Logo Ipsum", src:  logo  },
    { id: 10, name: "Logo Ipsum", src:  logo  },
    { id: 11, name: "Logo Ipsum", src:  logo  },
    { id: 12, name: "Logo Ipsum", src:  logo  },
  ];
//   console.log(brands);

  return (
    <div className="brands-section">
      <h1>
        We are blessed to work with amazing
        <br /> brands worldwide
      </h1>
      <div className="brands-grid">
        {brands.map((e) => (
          <div key={e.id} className="brand-card">
            <div>
              <img src={e.src} alt="" />
              <span>{e.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
