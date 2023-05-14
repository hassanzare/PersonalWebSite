import React, { useEffect, useState } from "react";
const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 2500) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  const Scroll = () => {
    console.log(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", Scroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="bck_red">
      <div
        style={{
          opacity: showFooter ? "1" : "0",
        }}
      >
        <div className="font_righteous footer_logo_venue">Hasan Zare</div>
        <div className="footer_copyright">personal WebSite 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
