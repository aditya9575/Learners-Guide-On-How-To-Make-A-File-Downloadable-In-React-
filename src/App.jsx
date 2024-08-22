import React from "react";
import TxtDownload from "./components/TXT-File-Download";
import DownloadPDF from "./components/PDF-File-Download";
import BillGenerator from "./components/HTMLCANVAS-PDF-File-Download";

const App = () => {
  return (
    <div>
      <h1>This is a step-by-step client-side file download demo guide</h1>

      <TxtDownload/>
      <DownloadPDF/>
      <BillGenerator/>
    </div>
  );
};

export default App;
