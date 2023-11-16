import MyComponent from "./components/MyComponent"
import MyNewComponentButton from "./components/MyNewComponentButton"
import MyContador from "./components/MyContador"

function App() {
  

  return (
    <div>

    
      <h1>Hello World, React!!</h1>
      <MyComponent></MyComponent> 
      <MyNewComponentButton conteudo='Me CLIQUE'></MyNewComponentButton>
      <MyNewComponentButton conteudo='Clique agora'></MyNewComponentButton>
      <MyNewComponentButton conteudo='CliqueDepois'></MyNewComponentButton>
      <br></br>
      <MyContador></MyContador>
    </div>
  )
}





export default App
