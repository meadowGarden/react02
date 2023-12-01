
import {people} from "./data/people";
import {useState} from "react";



const MyTeam = () => {
    const [myTeam, setMyTeam] = useState([]);


    const addTeamMember = (person) => {
        setMyTeam([...myTeam, person])
    }

    return (

        <>
            {people.map((person) => {
                return (
                <button onClick={() => addTeamMember(person)} style={{margin: "10px"}} key={person.id}>
                    Add {person.name}
                </button>)})}            

            <div>show my team</div>
            <ul>
                {myTeam.map((teamMember) => { 
                    return (
                    <li key={teamMember.id}>
                        {teamMember.name} {teamMember.age}
                    </li>                
                )})}
            </ul>
        
        </>
        
    )
};

export default MyTeam;