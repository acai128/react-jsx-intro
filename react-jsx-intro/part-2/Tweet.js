import React from "react"

function Tweet(props){
    return (
        <div className="tweet">
            <p>{props.username}</p>
            <p>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>

        </div>
    ); 
}


export default Tweet