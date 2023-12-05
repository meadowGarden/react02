import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OnePost = () => {
    const [post, setPost] = useState();
    const [postLoading, setPostLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            setPost(response.data);
            setPostLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);
   

    if (postLoading) {
        return <div>data is loading, please wait...</div>
    }

    const {title, body: text, userId: personalInfo} = post;  

    return (
        <div>
            <h1>{title}</h1>       
            <p>{text}</p>
            <p>author of this post is {personalInfo} </p>
            <button onClick={() => console.log("click")}>but</button>       
        </div>
    );
}

export default OnePost;