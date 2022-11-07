
import React from "react";
import Link from "next/link"
import styles from "./footer.module.scss"
  
const Footer = () => {
  return (
    <footer className=" w-full p-8  bg-purple-1000 text-white">
      <div className="flex flex-col md:flex-row justify-start md:justify-evenly items-center">
        <h1 className="text-white text-center">
          FLXPAY
        </h1>
        <div className="flex flex-col md:flex-row gap-10 justify-evenly">
          <ul className={styles.footerMenu}>
            <li> <Link href="/about"><a>About</a></Link></li>
            <li> <Link href="/careers"><a>Careers</a></Link></li>
            <li> <Link href="/contact"><a>Contact Us</a></Link></li>
          </ul>
          <ul className={styles.footerMenu}>
            <li> <Link href="/legal"><a>Legal</a></Link></li>
            <li> <Link href="/privacy"><a>Privacy</a></Link></li>
            <li> <Link href="/terms"><a className="text-pink-1000">Terms & Conditions</a></Link></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};
export default Footer;