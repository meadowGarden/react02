
import './App.css'
import Post from './Post'

function App() {

  const person = {
    name: "Darius",
    age: 34,
    hasLicence: true,
  };


  const posts = [
    {
      title: "this is my title",
      description:"this is my description",
      person: person,
    },
    {
      title: "second",
      description:"this is my other description",
      image: "google.lt",
      size: 50,
      person,
    },
    {
      title: "third",
      description:"this is my another description",
      image: "google.lt",
      size: 50,
      person: {
        name: "Siga",
      },
    },
  ]

  const mappedPosts = posts.map((post) => {
    return <Post
            title={post.title}
            description={post.description}
            personalInfo={post.person} />;
  });

 

  return (
    <>
      {/* <Post
      personalInfo= {person}
      title="this is my title"
      description="this is my description" />

      <Post
      personalInfo= {person}
      title="second title"
      description="this is my other description" /> */}

      {mappedPosts}






      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
