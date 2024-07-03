import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header";
import Student from "./Student";

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

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <MainBody />
    <div className="row">Students Enrolled</div>
    <Student experience={2} name="Kris Walley" />
    <Student experience={5} name="Jim Walker" />
    <Student experience={7} name="Kyle Rex" />
    <Student experience={10} name="Paul Tilson" />
    <Footer />
  </div>
);
