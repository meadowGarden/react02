import { useNavigate } from "react-router-dom";


const AboutMe = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>something about me</div>
            <button onClick={() => navigate("/contact")}>contact me here</button>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default AboutMe;