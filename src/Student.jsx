import { faker } from '@faker-js/faker';

export default function Student(props) {
    const fullName = "Kris Walley";
    const programmingExp = 2;
    return (
      <div className="container p-4">
     
        <div className="row border">
          <div className="col-2">
            <img src={faker.internet.avatar()} className="w-10"></img>
          </div>
          <div className="col-10">
            {props.name}
            <br />
            Coding Experience {props.experience} years
          </div>
        </div>
      </div>
    );
  }