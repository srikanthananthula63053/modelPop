import { useState } from "react";
import Modal from "./modal";


export default function ModalTest(){
    const[modalpop,setModalpop]=useState(false);

    function handleOnClick(){
        setModalpop(!modalpop);
    }
     
    return(
        <div>
            <div>
                <button onClick={handleOnClick}>click modal pop</button>
                {
                    modalpop && <Modal
                    id={"coustom id"}
                    />
                }
            </div>
        </div>
    );
}