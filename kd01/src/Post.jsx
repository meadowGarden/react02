import { useNavigate } from "react-router-dom";

// const Post = (personalInfo, props) => {
// const Post = ({personalInfo, title, description}) => {
const Post = ({personalInfo, title, description, id}) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>{title}</h1>       
            <p>{description}</p>
            <p>author of this post is {personalInfo} </p>
            <button onClick={() => navigate(`/posts/${id}`)}>click</button>                 
        </div>
    )
}

export default Post;