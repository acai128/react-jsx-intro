import React from "react"

function Person(props){
    let voteMsg = props.age >= 18 ? "Please go vote!" : "You must be 18"; 
    let hobbies = props.hobbies.map(h => <li>{h}</li>)
    return (
        <p>Learn some information about this person</p>
            <li>Name: {props.name.slice(0,6)}</li>
            <li>Age: {props.age}</li>
            <li>Hobbies: {hobbies}</li>

    )
}

// function Person(props){
//     <p>Learn some information about this person</p>
//     let hobbies = props.hobbies.map(h => <li>{h}</li>)

//     return (
//     if (props.age) > 18
//         return <h3>please go vote!</h3>; 
//     else 
//         return <h3>you must be 18</h3>; 
//     <li>name: {props.name.slice(0,6)}</li>
//     <li>age: {props.age}</li>
//     <li>Hobbies: {hobbies} </li>
    
// }; 
//     )
export default Person