import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContentContainer">
        Copyright &copy; {new Date().getFullYear()} Myumyun Ali
      </div>
    </div>
  );
}
