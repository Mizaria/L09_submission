import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef(null);
  const Navigate =useNavigate();
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const courseRef = useRef(null);


  function handleSubmit(event) {
    event.preventDefault();
    Navigate("/confirmed", {state :{ firstname: firstnameRef.current.value, lastname: lastnameRef.current.value,email:emailRef.current.value,
       course: courseRef.current.value}});
  }

  return (
    <div className="container">
      <h1>Register For Courses </h1>
      <p>
      You may register for the course you are interested in here!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="name" ref={firstnameRef} />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" ref={lastnameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Your Course:
          <input type="text" name="course" ref={courseRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
