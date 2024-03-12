import React from "react";

const d = new Date();
let year = d.getFullYear();

function Footer() {
    return <div>
        <p>Copyright ⓒ {year}</p>
    </div>
}
export default Footer;