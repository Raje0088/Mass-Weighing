import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();
  console.log("state", state);
  return (
    <div className="main flex flex-col gap-10 ">
      <div className="w-full h-auto flex flex-col lg:flex-row gap-10 ">
        <div className=" md:w-[50%] md:h-[100vh]  flex items-center justify-center">
          <img
            src={state.img}
            alt=""
            className="max-w-full max-h-full  object-contain "
          />
        </div>
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-5">
          <div>
            <h2>{state.details.Type}</h2>
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
              <label htmlFor="" className="font-semibold">
                Features
              </label>
              <ul>
                <li>Very nice product</li>
                <li>High sustainable</li>
                <li>Low mainatainance</li>
                <li>Affordable</li>
              </ul>
            </h4>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Product Details</h2>
        <table>
          <thead>
            <tr>
              <th>Usage</th>
              <th>Industrial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>{state.details.Type}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{state.details.Model}</td>
            </tr>
            <tr>
              <td>Make</td>
              <td>{state.details.Make}</td>
            </tr>
            <tr>
              <td>Construction</td>
              <td>{state.details.Construction}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{state.details.Speed}</td>
            </tr>
            <tr>
              <td>Weighing Range</td>
              <td>{state.details.WeighingRange}</td>
            </tr>
            <tr>
              <td>Accuracy</td>
              <td>{state.details.Accuracy}</td>
            </tr>
            <tr>
              <td>Air Requirement</td>
              <td>{state.details.AirRequirement}</td>
            </tr>
            <tr>
              <td>Approval from Weights & Measures</td>
              <td>{state.details.ApprovalfromWeightsMeasures}</td>
            </tr>
            <tr>
              <td>Paint</td>
              <td>{state.details.Paint}</td>
            </tr>
            <tr>
              <td>Load Cell</td>
              <td>{state.details.LoadCell}</td>
            </tr>
            <tr>
              <td>Pneumatics</td>
              <td>{state.details.Pneumatics}</td>
            </tr>
            <tr>
              <td>Discharge Gate</td>
              <td>{state.details.DischargeGate}</td>
            </tr>
            <tr>
              <td>Display</td>
              <td>{state.details.Display}</td>
            </tr>
            <tr>
              <td>Controller</td>
              <td>{state.details.Controller}</td>
            </tr>
            <tr>
              <td>Totalizes & Auto Tare</td>
              <td>{state.details.TotalizesAutoTare}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
