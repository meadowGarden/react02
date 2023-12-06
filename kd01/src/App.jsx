
import './App.css'
import Post from './Post'
import { LessText } from './LessText';
import { StepCounter } from './StepCounter';
import MyTeam from './MyTeam';
import { ThemeSwitcher } from './ThemeSwithcer';
import { ThemeProvider } from './ThemeProvider';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import NavBar from './NavBar';
import ContactMe from './ContactMe';
import OnePost from './OnePost';
import Events from './Events';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const person = {
    name: "Darius",
    age: 34,
    hasLicence: true,
  };


  const [postArray, setPostArray] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setPostArray(response.data);
      setIsLoading()})
    .catch(error => console.log(error));
  }, []);

  console.log("post array", postArray);

  if (isLoading) {
    return <div>data is loading, please wait...</div>
  }


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

  // const mappedPosts = posts.map((post) => {
  //   return <Post
  //           title={post.title}
  //           description={post.description}
  //           personalInfo={post.person} />;
  // });

  const mappedPosts = postArray.map((post) => {
    return <Post
            key={post.id}
            title={post.title}
            description={post.body}
            personalInfo={post.userId}
            id={post.id} />;
  });

//---------------------------------------------------------------

  const getPostData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log(response.data))
    .catch(error => console.log(error));
  };
  getPostData();

//---------------------------------------------------------------

  const postData = {
    userId: 102,
    id: 88,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "fffffffffffffff"
  }

  const addPost = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {postData})
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  }

  addPost();

//---------------------------------------------------------------





//---------------------------------------------------------------



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

      


      <NavBar />
      <Routes>
        <Route path="/about" element= {<AboutMe />} />
        <Route path="/posts" element= {mappedPosts} />
        <Route path="/contact" element= {<ContactMe />} />
        <Route path="/posts/:id" element= {<OnePost />} />
        <Route path="/events" element= {<Events />} />
      </Routes>



      

      
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>   */}
      {/* 
      <LessText />
      <StepCounter />

      <MyTeam /> */}

      {/* <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider> */}      


    </>
  )
}

export default App
