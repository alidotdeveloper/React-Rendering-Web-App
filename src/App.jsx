import React,{useState} from "react";

function App() {
const [Contacts, setContacts] = useState({
    fname : "",
    lname : "",
    email : ""
});

  function handlechange(e){
   

  const {name,value} = e.target;
  setContacts((preValue) => {
    
    return{
    ...preValue,
    [name]: value
    }
    

  }) 
  
  }
  
  return (
    <div className="container">
      <h1>Hello {Contacts.fname} {Contacts.lname}</h1>
      <p>{Contacts.email}</p>
      <input name="fname" onChange={handlechange} type="text" placeholder="Your First name?" />
      <input  name= "lname" onChange={handlechange} type="text" placeholder="Your Last name?" />
      <input  name= "email" onChange={handlechange} type="email" placeholder="Email" />

      <button >Submit</button>
    </div>
  );
}

export default App;
