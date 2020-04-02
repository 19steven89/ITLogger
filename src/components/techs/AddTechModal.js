import React, {useState} from 'react';
import M from "materialize-css/dist/js/materialize.min.js"; 

const  AddTechModal = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // function to handle the data entered in the modal 
    const onSubmit = () => {
        if(firstName === "" || lastName === "" ){
            // add a toast message from materialize if the user doesnt enter values
            M.toast({ html: "Please enter the first and last name" });
        }else{
            console.log(firstName, lastName);
        }

        // clear fields
        setFirstName("");
        setLastName("");
    };

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                    <h4>New Technician</h4>
                    <div className="row">
                        <label htmlFor="firstName" className="active">First Name</label>
                        <div className="input-field">
                            {/* e.target.value sets it to whatever we type in the input field */}
                            <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        </div>
                    </div> 

                      <div className="row">
                        <label htmlFor="lastName" className="active">Last Name</label>
                        <div className="input-field">
                            {/* e.target.value sets it to whatever we type in the input field */}
                            <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
                        </div>
                    </div>     
            
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-green btn">Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal; 
