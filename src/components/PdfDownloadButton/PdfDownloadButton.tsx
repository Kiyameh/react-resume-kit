import React from 'react'
import {Download} from 'lucide-react'
import './PdfDownloadButton.css'

export default function PdfDownloadButton() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <button
      onClick={handlePrint}
      className="pdf-download-button"
    >
      <Download className="pdf-download-icon" />
      Descargar Pdf
    </button>
  )
}
