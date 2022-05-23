import FormInput from "./components/FormInput";
import "./App.css"
import { useState } from "react";

function App() {
  const [values,setValues]=useState({
    username:"",
    Email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  })
  const inputs=[
    {
      id:1,
      errorMessage:"Username should be 1-16 character and shouldnot include any special character",
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id:2,
      errorMessage:"It should be valid email address",
      name:"Email",
      type:"email",
      placeholder:"Email",
      label:"Email",
      required:true
    },
    {
      id:3,
      errorMessage:"",
      name:"birthday",
      type:"date",
      placeholder:"birthday",
      label:"birthday"
    },
    {
      id:4,
      errorMessage:"Password hsould be 8-20 character and include at least 1 number 1 character and 1 special character",
      name:"password",
      type:"password",
      placeholder:"password",
      label:"password",
      required:true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      id:5,
      errorMessage:"password is not match",
      name:"confirmPassword",
      type:"password",
      placeholder:"confirmPassword",
      label:"confirmPassword",
      required:true,
      pattern:values.password
    }
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {
        inputs.map((input)=>(

          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))
      }
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
