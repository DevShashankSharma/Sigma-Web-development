import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("value");
  // const [form, setform] = useState({
  //   email: "",
  //   phone: "",
  // });
  const [form, setform] = useState({});
  const handleClick = () => {
    alert("Hello World");
  };

  const handleMouseOver = () => {
    alert("I am a red div");
  };

  const handleChange = (e) => {
    // setValue(e.target.value)
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <div className="btn">
        <button onClick={handleClick}>Click Me</button>
      </div>
      {/* <div onMouseOver={handleMouseOver} className="red">
        I am a red div
       </div> */}
      {/* <input type="text" name="email" id="inp" value={value} onChange={handleChange} /> */}
      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
