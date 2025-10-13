import React from "react";

const Contact = () => {
  return (
    <div className="main">
      <div className="heading-div">
        <h2>Contact Us</h2>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8526927943276!2d73.81956657518982!3d18.444996282633994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2951775fe86c5%3A0x4d5c1d7fef182925!2sMass%20Weighing%20%26%20Bagging%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1760293440575!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="py-10">
        <div>
          <h4>Address</h4>
          <p>
            Gat NO. 63, Ranje pune satara road , Taluka Bhor,Pune - 412205,
            Maharashtra, India
          </p>
        </div>
        <div>
          <h4>Mr. Bharat Eknath Patil (Director )</h4>
          <p>Mobile :08045812075</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
