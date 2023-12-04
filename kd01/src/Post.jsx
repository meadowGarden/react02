

// const Post = (personalInfo, props) => {
// const Post = ({personalInfo, title, description}) => {
const Post = ({personalInfo, title, description}) => {

    return (
        <div>
            <h1>{title}</h1>       
            <p>{description}</p>
            <p>author of this post is {personalInfo} </p>            
        </div>
    )
}

export default Post;