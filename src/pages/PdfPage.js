import React, { useState } from "react";
import PdfViewer from "../components/PdfViewer/index";
import { Button } from "antd";
import pdf from "../pdf/table.pdf";

function PdfPage() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="PdfPage">
      <PdfViewer
        pdf={pdf}
        onCancel={() => setShowPdf(false)}
        visible={showPdf}
      />
      <Button onClick={() => setShowPdf(!showPdf)}>Show PdfViewer</Button>
    </div>
  );
}

export default PdfPage;
