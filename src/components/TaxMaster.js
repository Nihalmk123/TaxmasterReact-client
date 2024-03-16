import React, { useState } from "react";

const TaxMaster = () => {
  const [taxName, setTaxName] = useState("");
  const [taxAmount, setTaxAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { tax_name: taxName, tax_amount: taxAmount };
    try {
      const response = await fetch("http://127.0.0.1:8000/taxmaster/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Data sent successfully");
        
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error occurred while sending data:", error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-12 ">
          <div className="card p-3 shadow-sm">
            <h1 className="text-center ">Tax Master</h1>
            <hr className="mb-5"></hr>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="taxName" className="form-label">
                  ADD TAX NAME
                </label>
                <input
                  type="text"
                  value={taxName}
                  onChange={(e) => setTaxName(e.target.value)}
                  className="form-control"
                  id="taxName"
                  maxLength={200}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="taxAmount" className="form-label">
                  ADD TAX AMOUNT
                </label>
                <input
                  type="text"
                  value={taxAmount}
                  onChange={(e) => setTaxAmount(e.target.value)}
                  className="form-control"
                  id="taxAmount"
                  maxLength={200}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxMaster;
