import Link from "next/link";
import React from "react";
import { BiLogoLinkedinSquare,BiLogoInstagramAlt,BiLogoGmail,BiLogoYoutube,BiLogoWhatsapp ,BiPhoneCall} from "react-icons/bi";
const FixedSocialIcon = () => {
  return (
    <>
      <div id="fixed-social">
        <div>
          <Link href="https://www.linkedin.com/in/goutam-behera-iam/" className="fixed-linkedin" target="_blank">
            <BiLogoLinkedinSquare /> <span>Linkedin</span>
          </Link>
        </div>
        <div>
          <Link href="https://www.instagram.com/goutambehera1999/" className="fixed-instagram" target="_blank">
            <BiLogoInstagramAlt /> <span>Instagram</span>
          </Link>
        </div>
        <div>
          <Link href="https://wa.me/8249914464" className="fixed-whatsapp" target="_blank">
            <BiLogoWhatsapp /> <span>Whatsapp</span>
          </Link>
        </div>
        <div>
          <Link href="mailto: goutam.behera466@gmail.com" className="fixed-gmail" target="_blank">
            <BiLogoGmail /> <span>Gmail</span>
          </Link>
        </div>
        <div>
          <Link href="tel:8249914464" className="fixed-phone" target="_blank">
            <BiPhoneCall /> <span>Phone</span>
          </Link>
        </div>
        <div>
          <Link href="https://www.youtube.com/@GoutamCodingUniverse" className="fixed-youtube" target="_blank">
            <BiLogoYoutube /> <span>Youtube</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FixedSocialIcon;
