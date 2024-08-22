import React, { useEffect } from "react";

const TxtDownload = () => {
  useEffect(() => {
    const a1 = document.getElementById("a1");
    const blob1 = new Blob(["Hello Txt Downloaded Content"], {
      type: "text/plain",
    });
    a1.href = URL.createObjectURL(blob1);
  }, []);

  return (
    <div>
      <div className="txt-file-download">
        <p>.txt format download</p>
        <a id="a1" download="file1.txt">
          Download Text File
        </a>
      </div>
    </div>
  );
};

export default TxtDownload;
