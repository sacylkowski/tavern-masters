import React from 'react';
import { Link } from 'react-router-dom'

import Auth from '../../utils/auth'

const CampaignForm = () => {

    const checkEventFilled = (event) => {
        if (!event.target.value) {
            setErrorMessage(`${e.target.name} is required.`)
        } else {
            setErrorMessage('')
        }
    };

    const submitCheck = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            setFormState({ [event.target.name]: event.target.value});
            console.log('Form', formState)
        }
    }

    const randomize = (event) => {}
    return (
        // OUTSIDE NEAGATIVE SPACE
        <section>
            {/* First Border */}
            <form id="campaign-form" onSubmit={submitCheck}>
                <div>
                    <div>
                        {/* Enter Campaign Title */}
                        <label htmlFor="Title">Title:</label>
                        <input type="text" name="title" defaultValue={Title}></input>
                    </div>
                </div>

                <div>
                    <div>
                        {/* Enter Campaign Description */}
                        <label htmlFor="Campaign-Description">Campaign Description:</label>
                        <textarea name="Description" defaultValue={Description}></textarea>
                    </div>
                </div>

                <div>
                    <div>
                        {/* Drop Down Menu Event #1 */}
                        <select name="Event List" onBlur={checkEventFilled} defaultValue={Episode}>
                            <option value="Episode#1">Episode#1</option>
                            <option value="Episode#2">Episode#2</option>
                            <option value="Episode#3">Episode#3</option>
                            <option value="Episode#4">Episode#4</option>
                            <option value="Episode#5">Episode#5</option>
                        </select>

                        <button data-testid="button" type="random" onClick={Randomize}>Randomize</button>
                    </div>
                </div>

                <div>
                    <div>
                        <button data-testid="button" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default CampaignForm