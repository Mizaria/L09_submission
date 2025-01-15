import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef(null);
  const Navigate =useNavigate();
  const nameRef = useRef(null);
  const courseRef = useRef(null);


  function handleSubmit(event) {
    event.preventDefault();
    Navigate("/confirmed", {state :{ name: nameRef.current.value, email:emailRef.current.value,
       course: courseRef.current.value}});
  }

  return (
    <div className="container">
      <h1>Register your interest </h1>
      <p>
      Please register the course you are interested!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          course:
          <input type="text" name="course" ref={courseRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
