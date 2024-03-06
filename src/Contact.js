import * as React from "react"; 
import "./Contact.css";
function Contact() {

    return (
        <div className="contact">
            <a href ="https://www.facebook.com/ivan.villanueva.9235199" target="_blank">
                <img
                alt="fb"
                src="/images/fb.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            </a>
            <a href ="https://github.com/iban2t" target="_blank">
                <img
                alt="git"
                src="/images/git.png"
                width="30"
                height="auto"
                className="d-inline-block align-top"
                />{' '}
            </a>
        </div>

    );
}

export default Contact;