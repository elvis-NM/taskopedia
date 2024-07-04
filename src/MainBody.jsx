
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

function MainBody(props) {

   
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {props.whatWeWillLearn} by building Task-Opedia
          <br />
          Total Lecture = {props.lectureCount}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>

        <Student
      experience={2}
      name="Kris Walley"
      headshot="https://placehold.co/603x403"
    >
   <StudentReview/>
    </Student>

    <Student
      experience={5}
      name="Jim Walker"
      headshot="https://placehold.co/603x403"
    >
    <StudentReview/>
    </Student>
    
    <Student
      experience={7}
      name="Kyle Rex"
      headshot="https://placehold.co/603x403"
    />
    <Student
      experience={10}
      name="Paul Tilson"
      headshot="https://placehold.co/603x403"
    />
      </div>
    );
  }

  export default MainBody