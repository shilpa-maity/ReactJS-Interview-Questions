//Example of  Class Component for Multi Component Pages
import { Welcome } from "./components/Welcome";
function App(){
  return(
    <div className="container-fluid">
      <header className="modal-header">
        <h1>App Component:Parent/Default Component</h1>
      </header>
      <div className="card p-3 m-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente recusandae tempore harum placeat quam quis voluptatibus doloremque non natus, quos incidunt distinctio quaerat voluptatum adipisci debitis laudantium et dolor.
        Eos, molestiae unde sint exercitationem minima at laudantium ab magnam debitis. Ullam facilis voluptatem est dolor quisquam. Amet ad maxime, excepturi laboriosam ipsum corrupti nulla voluptate! Vero quaerat impedit necessitatibus.
        Alias obcaecati odit odio dolores sapiente modi a architecto magnam quos sunt nulla debitis consectetur, sit dolorum harum unde dolore. Deserunt error dolor rem sapiente alias? Repellendus qui illo dolores!</p>
      </div>
      <div>
        <Welcome/>
      </div>
    </div>
  )
}
export default App