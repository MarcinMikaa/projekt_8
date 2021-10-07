import "./NavbarLeft.css";

function NavbarLeft() {
  return (
    <div className="navbar-left">
      <img src="search-image.png" alt="search" class="search"></img>
      <input type="text" class="input" value="Search for any training you want"></input>
    </div>
  );
}

export default NavbarLeft;
