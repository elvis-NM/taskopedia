import logo from "../images/react.png"

function MainHeader() {
    return (

        <div>
            <img src={logo}></img>
            React Course = TaskOpedia
        </div>
    );
  }
  
  const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
  };
  
  function SubHeader() {
    return <p style={subHeaderStyle} className="text-center">This is an exciting course</p>;
  }
  
  export default function Header() {
    return (
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    );
  }
// export default Header;
