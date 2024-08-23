import React from 'react'
import "./AppBtn.css"


export default function AppBtn({ name }: { name: string }) {
  const handleScrollTo = (section: string) => {
    // Go to booking a table section
  };

  return (
    <a
      className="app-btn scrollto d-none d-lg-flex"
      onClick={() => handleScrollTo('book-a-table')}
    >
      {name}
    </a>
  );
}
