
import './App.css'
import Post from './Post'

function App() {

  const person = {
    name: "Darius",
    age: 34,
    hasLicence: true
  }

  return (
    <>
      <Post
      personalInfo= {person}
      title="this is my title"
      description="this is my description" />

      <Post
      personalInfo= {person}
      title="second title"
      description="this is my other description" />


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
