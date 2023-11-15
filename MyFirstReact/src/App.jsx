import MyComponent from "./components/MyComponent"
import MyNewComponentButton from "./components/MyNewComponentButton"

function App() {
  

  return (
    <div>

    
      <h1>Hello World, React!!</h1>
      <MyComponent></MyComponent> 
      <MyNewComponentButton conteudo='Me CLIQUE'></MyNewComponentButton>
      <MyNewComponentButton conteudo='Clique agora'></MyNewComponentButton>
      <MyNewComponentButton conteudo='CliqueDepois'></MyNewComponentButton>
    </div>
  )
}





export default App
