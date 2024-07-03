import ReactDOM from "react-dom/client";
import "./CSS/style.css";

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This is an exciting course</p>;
}

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;
  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building Task-Opedia
        <br />
        Total Lecture = {lectureCount}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/* <div>
                Enter Task : <input maxLength={5} readOnly={false} placeholder="Ben"></input>
            </div> */}
    </div>
  );
}

function Students() {
  const fullName = "Kris Walley";
  const programmingExp = 2;
  return (
    <div classNmae="container p-4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img src={`https://ui-avatars.com/api/?name=${fullName}`}></img>
        </div>
        <div className="col-10">
          {fullName}
          <br />
          Programming Experience {programmingExp} years
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    Hello World
    <Header />
    <MainBody />
    <Students />
    <Students />
    <Students />
    <Students />
    <Footer />
  </div>
);
