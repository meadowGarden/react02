import { useState } from "react";

const Events = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({name:"", email:"", message:""});
    const [inputError, setInputError] = useState();

    const handleChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
        if (event.target.value.length < 10) {
            setInputError("input more than 10 symbols");
        } else {
            setInputError("");
        }
    };

    const handleDropDown = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleCheckBox = (e) => {        
        setIsChecked(e.target.checked);
    }

    const handleForm = (event) => {
        console.log("form event", event);
        setFormData((prevFormData) => ({...prevFormData, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`name:${formData.name}, email:${formData.email}, succesfully submited`);
    };

    const commonStyle = {marginBottom:"50px"};

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                    <label>name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleForm}/>
                    <label>email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleForm}/>
                    <label>message:</label>
                    <textarea name="message" value={formData.message} onChange={handleForm}/>
                    <button>submit</button>
                    <p>handle form value: {formData.name} {formData.email} {formData.message} </p>
                </form>
            </div>

            <div style={commonStyle}>
                <form>
                    <label>fill in the form</label>
                    <input type="text" value={inputValue} onChange={handleChange} />
                </form>
                {inputError && <p style={{fontSize: "10px", color: "red"}}>{inputError}</p>}
                <p>input value: {inputValue}</p>
            </div>

            <div style={commonStyle}>
                <label>
                    select
                    <select value={selectedOption} onChange={handleDropDown}>
                        <option value="option 1">op1</option>
                        <option value="option 2">op2</option>
                        <option value="option 3">op3</option>
                    </select>
                </label>
                <p>selected option: {selectedOption}</p>
            </div>

            <div style={commonStyle}>
                <form>
                    <label>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckBox}/>
                        select
                    </label>
                    {isChecked ? <p>checkbox selected</p> :<p>checkbox not selected</p>}
                </form>
            </div>
            
            
        </>
    );
};

export default Events;