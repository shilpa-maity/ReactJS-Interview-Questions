           /*   Q)   Functional Component (Greet.jsx in components )            */ 
import Greet from './components/Greet'
function App(){
  return(
    <div className="container-fluid">
      <header className='modal-header'>
        <h1>AppComponenet:Parent/Default Component</h1>
      </header>
      <div className='card p-3 m-3'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam consequuntur fuga iusto, dolorem exercitationem reiciendis illum provident explicabo maxime expedita. Dolorem assumenda distinctio, eveniet hic quo praesentium minus libero eum?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore harum, illum voluptatum nesciunt, cumque voluptatibus ducimus velit blanditiis, dicta fugiat praesentium architecto. Eveniet quis provident, facere eaque ad quidem maiores!
        </p>
      </div>
      <div>
        <Greet/>
      </div>
    </div>
  )
}
export default App








// Q ) difference between default export vs named export in ES-6 or in React
// import {  Greet1_FunctionalChildComponent as MyGreet} from './components/Greet1_FunctionalChildComponent'
// function App(){
//   return (
//     <div className="container-fluid">
//       <header className="modal-header">
//         <h4>AppComp : Parent/default Component</h4>
//       </header>
//       <div className="card p-3 m-3">
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit voluptate ad hic qui non laudantium eius commodi, labore error quas architecto blanditiis incidunt voluptas maxime corrupti sequi dolor iste.
//         Perferendis laborum adipisci, dolores illum dicta voluptatibus alias tempore quis? Earum soluta, quisquam quidem possimus, modi ratione omnis quaerat at non officiis maiores asperiores. Expedita repellat recusandae veritatis dolorum voluptas.
//         Perferendis beatae dolor et, nesciunt quaerat magnam explicabo culpa rem, dignissimos minus eos! Voluptates aperiam sapiente dolore laborum inventore quisquam repellat porro asperiores dolorem. Modi ad eveniet architecto non saepe.</p>
//       </div>
//       <div>
//         <MyGreet/>
//       </div>
//     </div>
//   )
// }
// export default App