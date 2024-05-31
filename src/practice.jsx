import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Prac() {
    let variable = "practice world";
    let array=[10,20,30,40]
    let object = {
        n : "aiman",
        department : "CS",
        semster : "7th",
    }
    let headerInfo = {
        email :"umeaiman@gmail.com",
        phone : "09876"
    }
    
    let status =true;

    let displayData = ()=>{
        alert("Button clicked")
    }

    let addData = (a,b) =>{
        console.log(a+b);
    }



    return(
        // data sent to header component through practice // use custom attributes props /
        // email --> name of props
       <div className='Prac'>
        <Header email='aiman@gmail.com' phone='123456' headerInfo= {headerInfo}>
            <h3> Header Children props </h3>
        </Header>
        <Footer/>
        <AppComp/>
         <button onClick={displayData}> Submit </button>
         <button onClick={()=> addData(20,25)}> Add Data</button>
          <h1> Welcome to react practice</h1>
          <h2> {variable}</h2>
          {array.map((item)=>{
            return(
                <div>
                    {item}
                </div>
            )
          })}
          <div>
            {object.department}
          </div>
          <div>
            {
                (status) ?  <h3 style = {{color : "red" , backgroundColor:"blue"}}> Practice React JS</h3> : " Nothing"
            }
          </div>
       </div>

    )}
    function AppComp(){
        return(
            <div> <h2> Welcome to inside app component </h2></div>
        )
    }
  
export default Prac;
