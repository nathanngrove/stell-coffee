import React from "react";
import Copyright from "./Copyright";
import InstagramLogo from "./InstagramLogo";
import YelpLogo from "./YelpLogo";

function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <InstagramLogo />
        <YelpLogo />
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
