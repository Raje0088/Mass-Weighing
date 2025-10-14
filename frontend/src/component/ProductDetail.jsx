import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();
  console.log("state", state);
  return (
    <div className="main ">
      <div className="w-full h-auto flex gap-10 ">
        <div className="w-[60%] h-full">
          <img src={state} alt="" className="w-full  h-full object-cover object-center" />
        </div>
        <div className="w-[40%] flex flex-col gap-5">
          <div>
            <h2>SS Material Handling System</h2>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h4>
              The SS Material Handling System is an excellent industrial
              equipment that features high quality attributes. It is designed to
              provide efficient and reliable material handling solutions for
              industrial applications. With its durable build, this
              electric-powered system can withstand harsh working environments,
              ensuring long-lasting performance. It is a new product that comes
              with a warranty to give customers peace of mind. This material
              handling system is suitable for manufacturers, service providers,
              suppliers, and traders that require a robust and efficient
              solution for moving materials. It is designed to handle heavy
              loads and can move them with ease. The SS Material Handling System
              is a high-quality product that can help businesses improve their
              productivity and efficiency.
            </h4>
            <h4>
                <label htmlFor="">Features</label>
              <ul>
                <li>Very nice product</li>
                <li>High sustainable</li>
                <li>Low mainatainance</li>
                <li>Affordable</li>
              </ul>
            </h4>
          </div>
          <div>
            <h4>Product Details</h4>
            <table>
              <thead>
                <tr>
                  <th>Usage</th>
                  <th>Industrial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Condition</td>
                  <td>New</td>
                </tr>
                <tr>
                  <td>Power Source</td>
                  <td>Electric</td>
                </tr>
                <tr>
                  <td>Feature</td>
                  <td>High Quality</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Attributes</td>
                  <td>Durable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
