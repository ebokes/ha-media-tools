import Image from "next/image";
import React from "react";

interface QrImgProps {
  src: string;
}

const QrImg = ({ src }: QrImgProps) => {
  return (
    <>
      <Image
        src={src}
        alt="qrcode"
        width={800}
        height={800}
        style={{
          width: 400,
          height: "100%",
        }}
      />
      <a
        href={src}
        download="qrcode.png"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 text-sm sm:text-xl px-4 rounded"
      >
        Download
      </a>
    </>
  );
};

export default QrImg;
