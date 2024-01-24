import './App.css';
import React, {useState,useEffect} from 'react';
//import ForgotPassword from './ForgotPassword.js';
import { Link } from "react-router-dom";
import backimage from './digi.jpg';
//import {useFormik} from "formik";
//import {loginSchema} from './Yup.js';

// const initalValues = {
//     name: '',
//     password: ''
// }

const Login= () =>{
     
    // const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
    //     initalValues: initalValues,
    //     validationSchema: loginSchema,
    //     onSubmit: (values)=>{
    //         console.log(
    //             values,
    //             errors
    //         );
    //     },
    //  });

    const[form, setForm] = useState({});
    const[users, setUsers] = useState({});

    const handleForm = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value   
                })
    }

  //  to send the data
    const handleSubmit = async (e) =>{
        e.preventDefault();  //
        //console.log(form);
        const response = await fetch("http://localhost:8080/demo",{
         method:'POST',
         body: JSON.stringify(form),
         headers:{                             //header gives aditional information which kind of data we are goning to send
         'Content-type': "application/json",
         }
        })
        const data = await response.json();
        
        console.log(data);
    }

    //to get the data 
      
     const getUsers = async ()=>{
        const response = await fetch("http://localhost:8080/demo",{
        method:'GET',
        })
             const data = await response.json();
             setUsers(data);
             //console.log(data);
     }

  useEffect(()=>{
  getUsers();
  },[])


    return(
        <>   
             <div className="container">
               <div>
                    <img  src={backimage} alt="logo"/> 
                    <div className="title"> welcome to digitalk Admin</div>

               </div>
                     
                    <form onSubmit={handleSubmit}>
                        
                    <div className="input">
                      <div className="inputs">
                      <input 
                      type="username" 
                      name="username"
                      placeholder="USERNAME"
                      onChange={handleForm}
                      />
                     </div>,


                      <div className="inputs">
                      <input
                       type="password"
                        name="password" 
                        placeholder="PASSWORD"
                         onChange={handleForm}
                       />
                       </div> 
                       <div className="inputs">
                   <Link to="/Sidebar" > <button  className="submit-button" type="submit">Log In</button></Link>
                      </div>
                       {/* <a href="/ForgotPassword.js">ForgotPassword</a> */}

                       <Link to="/ForgotPassword" ><h5>Forgot password</h5></Link> 
                    
                       
                    </div>
                </form> 
                {/* <div>
                    <ul>
                         {users.map(user=><li>{user.username},{user.password}</li>)}
                    </ul>
                </div>   */}
             </div>    
        </>

    );
};
export default Login;