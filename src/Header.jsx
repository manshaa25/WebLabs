import React from 'react'

export default function Header(props) {
    console.log(props.email)
    console.log(props.phone)
    console.log(props.headerInfo.email)
    console.log(props.headerInfo.phone)

    // direct destucture
     // function Header({name , email , headerInfo})
    // destructuure header info fromm props 

    // destructure meaning that you extact those key that you want to print

    let {headerInfo} = props
    console.log(headerInfo)
  return (
    <div>
        {props.children}
    <div><h1>Welcome to Header Section  {props.email} | {props.phone}</h1></div>
    <h2> Props object pass {props.headerInfo.email} | {props.headerInfo.phone} </h2>
    <h3> Destructure props {headerInfo.email}</h3>
        <div> hello</div>
        <h2>hello h2</h2>
    </div>
     // react says one parent multiple child not individual parent
    // error -->    <div> hello</div>
    // error --> <h2>hello h2</h2>
  )
}
