import React, { FC, RefObject } from 'react';
import './Contact.css';

type Props = {
  reference: RefObject<HTMLHeadingElement>;
};

const Contact: FC<Props> = (props) => {
  return (
    <div id="contact" className="padding-top">
      <h1 className="section-title" ref={props.reference}>
        Contact
      </h1>
      <iframe
        className="contact-form"
        title="contact"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdIlBs5v_zF-OBm6Zv_jp2A5P8-RBLaHH_dQrfnYwCNmCb_hw/viewform?embedded=true"
        width="100%"
        height="700px"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        読み込んでいます…
      </iframe>
    </div>
  );
};

export default Contact;
