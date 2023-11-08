import React from "react";

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
        <h2 className="text-3xl text-orange-800 font-bold underline text-center mb-3">F A Q</h2>
        <p className="text-base text-center text-orange-800 font-serif">Some questions answer you may want to know.</p>
      <div className="join join-vertical w-full font-serif ">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium text-orange-800">
          How to cancel reservation?
          </div>
          <div className="collapse-content">
            <p>To modify or cancel a reservation, use the same method used to book.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="text-orange-800 collapse-title text-xl font-medium">
          What is checkout time?
          </div>
          <div className="collapse-content">
            <p>the time by which one has to check out of a hotel.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-orange-800">
          How can I confirm my booking?
          </div>
          <div className="collapse-content">
            <p>The booking can be confirmed by clickink Book Button</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
