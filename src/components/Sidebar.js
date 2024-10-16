// src/components/Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ data }) => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSections, setExpandedSections] = useState({});

  // Toggle Category Expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Toggle Section Expansion
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="sidebar">
      <ul className="category-list">
        {data.map((category) => (
          <li key={category.category_id}>
            {/* Category Name */}
            <div 
              onClick={() => toggleCategory(category.category_id)} 
              className="category-name"
              style={{ cursor: 'pointer' }}
            >
              {category.name}
            </div>
            {/* Render Sections if Category is Expanded */}
            {expandedCategories[category.category_id] && (
              <ul className="section-list">
                {category.sections.map((section) => (
                  <li key={section.section_id}>
                    {/* Section Name */}
                    <div 
                      onClick={() => toggleSection(section.section_id)} 
                      className="section-name"
                      style={{ cursor: 'pointer' }}
                    >
                      {section.section_name}
                    </div>
                    {/* Render Product Types if Section is Expanded */}
                    {expandedSections[section.section_id] && (
                      <ul className="product-type-list">
                        {section.product_types.map((productType) => (
                          <li key={productType.id} className="product-type-name">
                            {productType.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
