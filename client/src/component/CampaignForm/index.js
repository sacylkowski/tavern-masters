import React, { useState } from 'react';
import "./campaignform.css";

import { useMutation } from '@apollo/client'
import { ADD_CAMPAIGN } from '../../utils/mutations'
import { QUERY_CAMPAIGNS, QUERY_ME} from '../../utils/queries'

const CampaignForm = () => {
    const [formState, setFormState ] = useState({ campaignName: '', campaignDescription: '' });
    const [characterCount, setCharacterCount] = useState(0);

    const [addCampaign, { error }] = useMutation(ADD_CAMPAIGN, {
        update(cache, { data: { addCampaign } }) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, campaigns: [...me.campaigns, addCampaign] } },
                });
            } catch (e) {
                console.warn("First Campaign insertion by user!")
            }

            const { campaigns } = cache.readQuery({ query: QUERY_CAMPAIGNS });
            cache.writeQuery({
                query: QUERY_CAMPAIGNS,
                data: { campaigns: [addCampaign, ...campaigns] },
            });
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });

        if (name === 'campaignDescription') {
            setCharacterCount(value.length);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addCampaign({
                variables: { ...formState },
            });

            setFormState({ campaignName: '', campaignDescription: '' });
            setCharacterCount(0);
        }   catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="campaign-form">
            

            <form 
                onSubmit={handleFormSubmit}>
                    <h3>Campaign name:</h3>
                    <textarea
                        placeholder="..."
                        name='campaignName'
                        type='campaignName'
                        id='campaignName'
                        value={formState.campaignName}
                        onChange={handleChange}
                    ></textarea>

        
                    <h3>Campaign description:</h3>
                    <p
                        className={` ${characterCount === 400 || error ? 'text-error' : ''}`}>
                            Character Count: {characterCount}/400
                            {error && <span> Something went wrong ... </span>}
                    </p>
                    <textarea
                        className="description"
                        placeholder="..."
                        name='campaignDescription'
                        type='campaignDescription'
                        id='campaignDescription'
                        value={formState.campaignDescription}
                        onChange={handleChange}
                    ></textarea> <br />

                    {/* THIS CODE IS FAKE AND DOES NOTHING --BEGIN--*/}
                    <select>
                        <option>Map to a mysterious treasure</option>
                        <option>Break out of the communal prison</option>
                        <option>Hunt of a local witch in the woods</option>
                    </select>

                    <select>
                        <option>Run in with a gang of thieves</option>
                        <option>Goblins attack the nearby village</option>
                        <option>Rescue traveler from a forest fire</option>
                    </select>

                    <select>
                        <option>Fight off the big ol dragon</option>
                        <option>Rescue the princess</option>
                        <option>Settle down for a beer in the tavern</option>
                    </select>
                    {/* THIS CODE IS FAKE AND DOES NOTHING --END--*/}

                    <button type="submit" className="button">
                        Submit
                    </button>
            </form>
        </div>
    )
}

export default CampaignForm;