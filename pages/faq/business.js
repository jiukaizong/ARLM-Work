
import React from 'react';
import AccordionList from '../../components/Accordion/accordion';

const business = () => {
  const faqs = [
    {"title":"Test heading","body":"Test heading"},
    {"title":"Test heading 2","body":"Test heading 2"}
  ]
  return (
    <>
      <div className="hero"></div>
      <div className="content">
        <header>
          <h1>Business FAQ</h1>
        </header>
        <AccordionList information={faqs} />
      </div>
    </>
  );
};

export default business;