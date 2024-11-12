import React, {  } from "react";

const ContactInfo = ({ mainclass, linkclass, teldata, emaildata, addressdata, telicon, emailicon, addressicon }) => {
    return (
      <div className={mainclass}>
        <a
          className={linkclass}
          aria-label="Phone Number"
          href={`tel:${teldata}`}
        >
          <span className="pdf-icon">{telicon}</span>
          <span>{teldata}</span>
        </a>
        <a
          className={linkclass}
          aria-label="Email Address"
          href={`mailto:${emaildata}`}
        >
          <span className="pdf-icon">{emailicon}</span>
          <span>{emaildata}</span>
        </a>
        <address aria-label="Address" className={linkclass + " not-italic"}>
          <span className="pdf-icon">{addressicon}</span>
          <span>{addressdata}</span>
        </address>
      </div>
    );
  }

export default ContactInfo;