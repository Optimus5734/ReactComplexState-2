import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function sub(event) {
    const { value, name } = event.target;
    //u even can use this instead of the whole if statement
    //     setContact((prevValue) => {
    //   return { ...prevValue, [name]: value };
    // });
    if (name === "fName") {
      setContact((prevValue) => {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      });
    } else if (name === "lName") {
      setContact((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      });
    } else {
      setContact((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      });
    }
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={sub}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={sub}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={sub}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
