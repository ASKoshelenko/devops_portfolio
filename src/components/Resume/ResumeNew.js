import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useTranslation } from 'react-i18next';
import en_pdf from "../../Assets/CV_Koshelenko.pdf";
import ua_pdf from "../../Assets/Koshelenko.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t, i18n } = useTranslation();
  const [width, setWidth] = useState(1200);
  const [pdfPath, setPdfPath] = useState(null);

  const selectResume = (locale) => {
    const resumeFile = locale === "ua" ? ua_pdf : en_pdf;
    setPdfPath(resumeFile);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    // Выбор файла резюме на основе текущей локали
    const currentLocale = i18n.language;
    const resumeFile = currentLocale === "ua" ? ua_pdf : en_pdf;

    // Устанавливаем путь к файлу резюме
    setPdfPath(resumeFile);
  }, [i18n.language]);

  if (!pdfPath) {
    // Если pdfPath не установлен, отобразите загрузку или другую заглушку
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
          {/* Кнопки выбора версии резюме */}
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button 
              variant="primary"
              onClick={() => selectResume('en')}
              style={{ maxWidth: "250px", margin: "5px" }}
            >
              {t("select_en_resume")}
            </Button>
            <Button 
              variant="primary"
              onClick={() => selectResume('ua')}
              style={{ maxWidth: "250px", margin: "5px" }}
            >
              {t("select_ua_resume")}
            </Button>
          </Row>

          {/* Кнопка скачивания резюме */}
          {/* <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdfPath}
              target="_blank"
              style={{ maxWidth: "250px", margin: "5px" }}
            >
              <AiOutlineDownload />
              &nbsp;{t("download_cv")}
            </Button>
          </Row> */}

        <Row className="resume">
          <Document file={pdfPath} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t("download_cv")}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
