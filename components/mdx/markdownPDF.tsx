'use client'

import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";

export default function MarkdownPDF({ content, filename = "content.pdf" }: { content: string; filename?: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = React.useCallback(async () => {
    if (!contentRef.current) return;

    try {
      // Converts the content to an image
      const canvas = await html2canvas(contentRef.current);
      const imgData = canvas.toDataURL("image/png");

      // Configures the PDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Calculates image dimensions in the PDF
      const imgRatio = canvas.width / canvas.height;
      const pdfImgWidth = pageWidth;
      const pdfImgHeight = pageWidth / imgRatio;

      // Adds the image to the PDF (supports long content)
      let heightLeft = pdfImgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pdfImgWidth, pdfImgHeight);
      heightLeft -= pageHeight;

      // Adds extra pages if necessary
      while (heightLeft >= 0) {
        position = heightLeft - pdfImgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfImgWidth, pdfImgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(filename);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  }, []);
  const buttonClassName = "bg-blue-500 text-white px-4 py-2 rounded mb-4";

  return (
    <div>
      <button
        onClick={handleDownloadPDF}
        className={buttonClassName}
      >
        Baixar PDF
      </button>
        {React.useMemo(() => <ReactMarkdown>{content}</ReactMarkdown>, [content])}
      <div ref={contentRef} className="markdown-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
