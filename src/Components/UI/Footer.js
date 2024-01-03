import React from "react";
import classes from "./Footer.module.css";
const Footer = (props) => {
  return (
    <>
      <footer>
        <div className={classes.footer}>
          <div className={classes.feet}>
            <p className={classes.float}>The Generic</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
