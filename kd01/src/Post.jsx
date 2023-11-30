

// const Post = (personalInfo, props) => {
const Post = ({personalInfo, title, description}) => {

    // const {name, age} = personalInfo

    // console.log(props)
    return (
        <div>
            <h1>{title}</h1>       
            <p>{description}</p>
            <p>author of this post is {personalInfo.name} </p>            
        </div>
    )
}

export default Post;