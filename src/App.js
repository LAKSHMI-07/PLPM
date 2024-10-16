// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ProductListing from './components/ProductList';

const data = {
  data: [
    {
      sections: [
        {
          section_name: "Seating",
          section_id: "670cc9693ce5d3561a48d805",
          product_types: [
            { name: "Chairs", id: "670ccc453ce5d3561a48d823" },
            { name: "Barstools", id: "670ccc583ce5d3561a48d824" },
            { name: "Benches", id: "670ccc653ce5d3561a48d825" },
            { name: "Barchairs", id: "670ccc733ce5d3561a48d826" }
          ]
        },
        {
          section_name: "Tables",
          section_id: "670cc9343ce5d3561a48d804",
          product_types: [
            { name: "Pedestal Tables", id: "670ccbcb3ce5d3561a48d820" },
            { name: "Trestle Tables", id: "670ccbe23ce5d3561a48d821" },
            { name: "Leg Tables", id: "670ccbed3ce5d3561a48d822" }
          ]
        }
      ],
      category_id: "670cc889986a7e251a6d0fdd",
      name: "Dining"
    },
    {
      sections: [
        {
          section_name: "Beds",
          section_id: "670cc9a93ce5d3561a48d80c",
          product_types: [
            { name: "Mattresses", id: "670cccd13ce5d3561a48d827" },
            { name: "Storage Beds", id: "670cccdb3ce5d3561a48d828" }
          ]
        }
      ],
      category_id: "670cc889986a7e251a6d0fde",
      name: "Bedroom"
    },
    {
      sections: [
        {
          section_name: "Desks",
          section_id: "670cc9e23ce5d3561a48d813",
          product_types: []
        },
        {
          section_name: "Seating",
          section_id: "670cc9f23ce5d3561a48d814",
          product_types: []
        }
      ],
      category_id: "670cc889986a7e251a6d0fdf",
      name: "Office"
    },
    {
      sections: [
        {
          section_name: "Mirrors",
          section_id: "670ccb5e3ce5d3561a48d819",
          product_types: []
        }
      ],
      category_id: "670cc889986a7e251a6d0fe2",
      name: "Accessories"
    },
    {
      sections: [
        {
          section_name: "Seating",
          section_id: "670cca0b3ce5d3561a48d816",
          product_types: []
        },
        {
          section_name: "Tables",
          section_id: "670cca013ce5d3561a48d815",
          product_types: []
        }
      ],
      category_id: "670cc889986a7e251a6d0fe0",
      name: "Living"
    },
    {
      sections: [
        {
          section_name: "Dining",
          section_id: "670ccad03ce5d3561a48d817",
          product_types: []
        },
        {
          section_name: "Lounging",
          section_id: "670ccb0d3ce5d3561a48d818",
          product_types: []
        }
      ],
      category_id: "670cc889986a7e251a6d0fe1",
      name: "Outdoor"
    },
    {
      sections: [
        {
          product_types: [],
          section_id: ""
        }
      ],
      category_id: "670cc889986a7e251a6d0fe3",
      name: "Quick Ship"
    },
    {
      sections: [
        {
          product_types: [],
          section_id: ""
        }
      ],
      category_id: "670cc889986a7e251a6d0fe4",
      name: "Home Accents"
    },
    {
      sections: [
        {
          product_types: [],
          section_id: ""
        }
      ],
      category_id: "670cc889986a7e251a6d0fe4",
      name: "New added"
    }
  ]
};

function App() {
  return (
    <div className="main-container">
      <Sidebar data={data.data} />
      <div className="right-content">
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
