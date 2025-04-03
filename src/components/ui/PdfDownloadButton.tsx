import {Download} from 'lucide-react'
import styles from './PdfDownloadButton.module.css'
export default function PdfDownloadButton() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <button
      onClick={handlePrint}
      className={styles.button}
    >
      <Download className={styles.icon} />
      Descargar Pdf
    </button>
  )
}
