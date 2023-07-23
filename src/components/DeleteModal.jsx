import React from "react";
import Button from "./Button";
import {PropTypes} from 'prop-types'
import '../styles/DeleteModal.css'

class DeleteModal extends React.Component{
    render(){
        const {del, close, delItem} = this.props
        if(del){
            return(
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Anda Yakin?</h3>
                        <div className="btn-group">
                            <Button text="Done" variant="success" action={delItem}/>
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


export default DeleteModal