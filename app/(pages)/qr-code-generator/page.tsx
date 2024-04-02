import React from "react";
import QrCodeGenerator from "@/app/components/qr-code/QrCodeGenerator";
import Wrapper from "@/app/components/Wrapper";

const page = () => {
  return (
    <>
      <Wrapper>
        <QrCodeGenerator />
      </Wrapper>
    </>
  );
};

export default page;
