import {useState} from "react";

export const LessText = () => {
    const [hidden, setHidden] = useState(true);

    const changeHiddenValue = () => {
        if (hidden) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    };

    return(
        <div>
            <button onClick={changeHiddenValue}>Read {hidden ? "more" : "less"} </button>
            {!hidden && (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum magnam enim ab quibusdam cupiditate nulla nesciunt architecto, dolore quam corrupti minima debitis facilis provident soluta repellat sed? Quibusdam, officiis.
                </p>
            )}
        </div>
    );
};
