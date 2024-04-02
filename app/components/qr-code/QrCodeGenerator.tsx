"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { ErrorToast, SuccessToast } from "@/app/utils/toast";
import Form from "./Form";
import QrImg from "./QrImg";

function QrCodeGenerator() {
  const [url, setUrl] = useState<string>("");
  const [qr, setQr] = useState<string>("");

  const GenerateQRCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    QRCode.toDataURL(
      url,
      {
        width: 800,
        version: 4,
        margin: 2,
        color: {
          dark: "#000",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (!url) return ErrorToast("Enter URL to generate QR Code");
        SuccessToast("QR Code generated successfully");
        setQr(url);
        if (err) {
          ErrorToast(err.message);
        }
      }
    );
  };

  return (
    <>
      <div className="max-w-lg mx-auto my-8 border border-white py-9 rounded-lg px-4">
        <h1 className="text-center text-3xl font-bold">QR Code Generator</h1>
        <p className="max-w-[300px] mx-auto mb-4">
          Enter your URL the way you want it to appear when scanned
        </p>
        <Form
          onSubmit={GenerateQRCode}
          url={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      {qr && <QrImg src={qr} />}
    </>
  );
}

export default QrCodeGenerator;
