import React from "react";
import Button from "./Button";
import {PropTypes} from 'prop-types'
import '../styles/EditModal.css'

class EditModal extends React.Component{
    render(){
        const {edit, close, data, change, update} = this.props
        if(this.props.edit){
            return(
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Edit Task</h3>
                        <div className="input">
                            <input type="text" value={data.title} onChange={change}/>
                        </div>
                        <div className="btn-group">
                            <Button text="simpan" variant="success" action={update}/>
                            <Button text="cancel" variant="danger" action={close}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}

export default EditModal