import React, { useState } from 'react'

import { useMutation } from '@apollo/client'
import { ADD_ENCOUNTER } from '../../utils/mutations'
import { QUERY_ENCOUNTERS, QUERY_ME } from '../../utils/queries'

const EncounterForm = () => {
    const [encounterState, setEncounterState] = useState({ encounterName: '', encounterDescription: '' });
    const [characterCount, setCharacterCount] = useState('');


    const [addEncounter, { error }] = useMutation(ADD_ENCOUNTER, {
        update(cache, { data: { addEncounter } }) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, encounters: [...me.encounters, addEncounter] } }
                });
            } catch (e) {
                console.warn("First Encounter insertion by user!")
            }

            const { encounters } = cache.readQuery({ query: QUERY_ENCOUNTERS });
            cache.writeQuery({
                query: QUERY_ENCOUNTERS,
                data: { encounters: [addEncounter, ...encounters] }
            })
        }
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (value.length <= 400) {
            setEncounterState({
                ...encounterState,
                [name]: value
            })
            setCharacterCount(value.length)
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(encounterState);

        try {
            await addEncounter({
                variables: { ...encounterState }
            });
            setEncounterState({ encounterName: '', encounterDescription: '' });
            setCharacterCount(0);
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <div>
            <form
                onSubmit={handleFormSubmit}>
                <h3>Encounter Name:</h3>
                <textarea
                    placeholder="..."
                    name='encounterName'
                    value={encounterState.encounterName}
                    onChange={handleChange}
                ></textarea>

                <h3>Encounter Description:</h3>
                <p
                    className={` ${characterCount === 400 || error ? 'text-error' : ''}`}>
                    Character Count: {characterCount}/400
                    {error && <span> Something went wrong ... </span>}
                </p>
                <textarea
                    className="description"
                    placeholder='...'
                    name='encounterDescription'
                    value={encounterState.encounterDescription}
                    onChange={handleChange}
                ></textarea>

                <button tpye="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default EncounterForm