import './App.css';
import React, { useState } from 'react';
import { get } from 'aws-amplify/api';

const myAPI = "api5ae13e8a";
const path = "/customers";

const App = () => {
  const [input, setInput] = useState("");
  const [customers, setCustomers] = useState([]);

  async function getCustomer(e) {
    const customerId = e.input;

    try {
      const response = await get({
        apiName: myAPI,
        path: `${path}/${customerId}`,
      }).response;

      const data = await response.body.json();

      // overwrite result to avoid duplicates
      setCustomers([data]);
    } catch (error) {
      console.error("API error:", error);
    }
  }

  return (
    <div className="App">
      <h1>Super Simple React App</h1>

      <input
        placeholder="customer id"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={() => getCustomer({ input })}>
        Get Customer From Backend
      </button>

      <h2 style={{ visibility: customers.length > 0 ? 'visible' : 'hidden' }}>
        Response
      </h2>

      {customers.map((thisCustomer, index) => (
        <div key={index}>
          <span>
            <b>CustomerId:</b> {thisCustomer.customerId} –{" "}
            <b>CustomerName:</b> {thisCustomer.customerName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default App;
