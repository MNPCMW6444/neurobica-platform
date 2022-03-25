import React from "react";

import Box from "./footer/Box";
import Bg from "./footer/Bg";
import FooterButton from "./footer/FooterButton";

export default function Footer() {
  return (
    <div>
      <div className="footerbutton">
        <FooterButton />
      </div>
      <div className="footerbg">
        <Bg />
      </div>
      <div className="footerbox">
        <Box />
      </div>
    </div>
  );
}
