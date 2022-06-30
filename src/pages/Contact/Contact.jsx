import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar page="contact" />
      <img className="bg" src="/images/contactbg.png" alt="bg" />
      <div className="contact">
        <h1>REACH US AT</h1>
        <span>
          <h2>support@kicksup.com</h2>
          <p>for any technical support.</p>
        </span>
        <span>
          <h2>info@kicksup.com</h2>
          <p>for more information.</p>
        </span>
        <span>
          <h2>feedback@kicksup.com</h2>
          <p>to send your feedback.</p>
        </span>
        <span>
          <h2>jobs@kicksup.com</h2>
          <p>to work with us.</p>
        </span>
      </div>
      <div className="socials">
        <p>Stay in touch.</p>
        <span>
          <a href="">
            <img src="/images/twitter.png" alt="twitter" />
          </a>
          <a href="">
            <img src="/images/insta.png" alt="insta" />
          </a>
          <a href="">
            <img src="/images/facebook.png" alt="fb" />
          </a>
        </span>
      </div>
    </>
  );
}
