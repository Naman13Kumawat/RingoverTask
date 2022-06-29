import "./Navbar.scss";

export default function Navbar() {

  const handleClick = (e)=>{
    console.log("Cliked", e.target.tagName);
    // const elements = document.getElementsByClassName("other")
    // elements.classList.remove("active");
    e.target.classList.add("active");
    
    }

  return ( 
  <div className="navbar">
    <img className="logo" src="/images/websitelogo.png" alt="logo" />
    <ul>
      <li onClick={handleClick} className="other">HOME</li>
      <li onClick={handleClick} className="other">THE JOURNEY</li>
      <li onClick={handleClick} className="other">TEAM</li>
      <li onClick={handleClick} className="other active">STORE</li>
      <li onClick={handleClick} className="other">CONTACT</li>
    </ul>
    <span className="profileDiv">
      <img className="profile" src="/images/profile.png" alt="profile" />
      <h1>GAGAN</h1>
    </span>
  </div>
  );
}
