import React, { useState } from "react";
import jsPDF from "jspdf";

const DownloadPDF = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleDownload = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Age: ${age}`, 10, 20);
    doc.save("form-data.pdf");
  };

  return (
    <form onSubmit={handleDownload}>
      <h1>Enter your details</h1>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>

      <div>
        <button type="submit">Download PDF</button>
      </div>
    </form>
  );
};

export default DownloadPDF;
