import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const {state} =useLocation();

  return (
    <div className="container">
      <h1>Thank You!{state.firstname}{state.lastname}</h1>
      {state && (
        <>  
         
          <p> You have registered for {state.course}.</p>
          <p>we will be emailing you with <strong>{state.email}</strong></p>
        </>
      )}
    </div>
  );
}
