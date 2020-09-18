function FirstComponent(props){
    return (
    <div>
    <h1>My very first component</h1>
    <p>My name is {props.name}</p>
    </div>
    )
}

ReactDOM.render(
    <div>
    <FirstComponent name="Amy"/></div>, 
    document.getElementById("root")
  );

//   function Ex1(props) {
//     return (
//         <div>
//             <hi>My very first component </hi>
//             <p> My name is {props.name}</p>
//         </div>
//     )
// }
// ReactDOM.render(
//   <Ex1 name=“seungmin” />,
//   document.getElementById(“root”)
// );