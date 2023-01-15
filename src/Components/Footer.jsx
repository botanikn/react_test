import React from "react";

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer_place_info">
                <img src={require("C:/tasks/react/first_mission/src/img/logo.PNG")} />
                <p>PT Dwidasa Samsara Indonesia</p>
                <p>Ruko Jalur Sutera 29 No.53 Alam Sutera, Tangerang 15367</p>
            </div>
            <div className="footer_form">
                <p className="contact_us">Contact us</p>
                <div className="name_email">
                    <input type="text" placeholder="name" className="footer_form_name_input"/>
                    <input type="text" placeholder="email" className="footer_form_email_input"/>
                </div>
                <div className="comment_send">
                    <input type="text" placeholder="comment" className="footer_form_comment_input"/>
                    <button className="send_form">GET STARTED</button>
                </div>
            </div>
            <div className="footer_contact_info">
                <p>Phone: + 62 21 5314 1135</p>
                <p>Phone: + 62 21 5314 1137</p>
                <p>Email: community@dwidasa.com</p>
                <img src={require("C:/tasks/react/first_mission/src/img/sm.PNG")} />
            </div>
        </div>
    );

};

export default Footer;