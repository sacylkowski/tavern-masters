import React from "react";
import CampaignForm from "../CampaignForm";
import EncounterForm from "../EncounterForm";
import "./modal.css";

const Modal = ({ campaign }) => {

    return (
        <div className="modal">
            <h4 className="modal-title">Work Your Magic:</h4>
            <div className="campaign-form">
                { campaign ? (
                    <>
                    <CampaignForm />
                    </>
                ) : (
                    <>
                    <EncounterForm />
                    </>
                ) }
            </div>
        </div>
    )
}

export default Modal;