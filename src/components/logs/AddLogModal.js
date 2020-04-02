import React, {useState} from 'react';
import M from "materialize-css/dist/js/materialize.min.js"; 

export const AddLogModal = () => {
    const [message, setMessage] = useState("");
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState("");

    // function to handle the data entered in the modal 
    const onSubmit = () => {
        if(message === "" || tech === "" ){
            // add a toast message from materialize if the user doesnt enter values
            M.toast({ html: "Please enter a message and a technician"});
        }else{
            console.log(message, tech, attention);
        }

        // clear fields
        setMessage("");
        setTech("");
        setAttention("");
    };

    return (
        // the add-log-modal id is referenced in the AddBtn div which will be directed to this prop
        // giving it a class name of model defined in materialize will give the UI a modal when the + is clicked
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                    <h4>Enter System log</h4>
                    <div className="row">
                        <label htmlFor="message" className="active">Log Message</label>
                        <div className="input-field">
                            {/* e.target.value sets it to whatever we type in */}
                            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
                        </div>
                    </div>
            
                
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} 
                                className="browser-default" onChange={e => setTech(e.target.value)}>
                                <option value="" disabled>Select Technician</option>
                                <option value="Sam Johnson">Sam Johnson</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                {/* make the checked and value = to attention, gained from the state */}
                                <input type="checkbox" className="filled-in" checked={attention} 
                                        value={attention} onChange={e => setAttention(!attention) }/>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-green btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: "75%",
    height: "75%"
}

export default AddLogModal; 
