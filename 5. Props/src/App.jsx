// import Great1 from "./Components/Great1";
// import Great3 from "./Components/Great3";
// import Message from "./Components/Message";
// import Message2 from "./Components/Message2";
// import Child from "./Components/Child";
// import Child2 from "./Components/Child2";
// import CompA from "./Components/CompA";
import ParentComp from "./Components/ParentComp";
function App(){
  return(
    //Q)Greet1 Grreat2 Great3 Example
    // <>
    // <h1>Props Example in React</h1>
    // <Great1 message="Hello Bhaiiiiiiiiiiii" x='20' y='30'/>
    // <Great3 id="1001" name="Shilpa" age="20"/>
    // </>



    // <>
    // //Q)Creating State in React using class component
    // <Message/>
    // //Q)Creating state using functional component
    // <Message2/>
    // </>


    // //Q)React component to demonstrate state and normal variable usage
    // <>
    // <h1>Parent component</h1>
    // <div className="container">
    //   <Child message1="Hello World" message2="Hello Again " message3="Hi Again"/>
    //   <Child2 message1="Hello Dearrrrrrrrrr"/>
    // </div>
    // </>


    //Q) Component Chaining : CompA,CompB,CompC
    // <>
    // <h1>Parent Comp</h1>
    // <div>
    //    <CompA/>
    // </div>
   
    // </>


    //Q) Sending values from child to Parent component using props as method reference
    <>
    <h1>ParentComp</h1>
    <div>
      <ParentComp/>
    </div>
    </>
  )
}
export default App;