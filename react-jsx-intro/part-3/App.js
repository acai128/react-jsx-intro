import React from "react"

function App(){
    return(
        <div>
            <Person name="Jane" age={20} hobbies={["hiking", "eating", "cooking"]}/>
            <Person name="Joe" age={30} hobbies={["bowling", "running", "basketball"]}/>
            <Person name="Bob" age={35} hobbies={["coding", "sleeping" , "watching movies"]}/>
        </div>
    )
}

export default App 