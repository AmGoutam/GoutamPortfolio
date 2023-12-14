import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="error_page">
      <div class="error-code">404</div>
      <div className="error-messege">
        opps! page not found
      </div>
      <div className="btn_box error_btn_bx">
          <Link href="/" className="btn">
          Back to Home
          </Link>
        </div>
    </section>
  );
};

export default NotFound;
