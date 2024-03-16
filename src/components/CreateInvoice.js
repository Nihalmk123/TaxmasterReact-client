import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateInvoice = () => {
  const [Taxval, setTaxValues] = useState([]);

  useEffect(() => {
    fetchTaxValues();
  }, []);

  const fetchTaxValues = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/taxmaster/");
      setTaxValues(response.data);
      console.table(response);
    } catch (error) {
      console.error("Error fetching tax values:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="text-center mb-4">Create Invoice</h3>
                <hr className="fs-3"></hr>
                <div
                  style={{
                    backgroundColor: "#F0F0F0",
                    padding: "20px",
                    borderRadius: "8px",
                  }}
                >
                  <div className="row">
                    <div className="col-md-1">
                      <div className="form-group">
                        <label>Category:</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Item Description:</label>
                        <textarea type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Quantity:</label>
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Quantity:</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-1">
                      <div className="form-group">
                        <label>Price:</label>
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Amount:</label>
                        <input type="number" className="form-control" />
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="form-group">
                        <label className="">Tax:</label>
                        <select className="form-control">
                          {Taxval.map((Tax_Values) => (
                            <option key={Tax_Values.id} value={Tax_Values.id}>
                              {Tax_Values.tax_name}
                              {/* {Tax_Values.tax_amount} */}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-warning mt-4">
                      Add other row
                    </button>
                    <div className="col-md-1">
                      <div className="form-group">
                        Subtotal :
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <hr className="fs-3"></hr>
                <div
                  style={{
                    backgroundColor: "#F0F0F0",
                    padding: "20px",
                    borderRadius: "8px",
                  }}
                >
                  <div className="row"></div>
                  <div className="d-flex justify-content-between"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateInvoice;
