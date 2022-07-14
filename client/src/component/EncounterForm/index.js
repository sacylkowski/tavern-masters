import React, { useState } from 'react'

import { useMutation } from '@apollo/client'
import { ADD_encounter } from '../../utils/mutations'
import { QUERY_ENCOUNTERS, QUERY_ME } from '../../utils/queries'

const EncounterForm = () => {
    const [encounterName, setName] = useState('')
    const [encounterDescription, setDescription] = useState('')
    const [characterCount, setCharacterCount] = useState('')


    const [ addencounter, { error } ] = useMutation(ADD_encounter, {
        update(cache, { data: { addencounter} }) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, encounters: [...me.encounters, addencounter] } }
                });
            } catch (event) {
                console.warn("First Encounter insertion by user!")
            }

            const { encounters } = cache.readQuery({ query: QUERY_ENCOUNTERS });
            cache.writeQuery({
                query: QUERY_ENCOUNTERS,
                data: { encounters: [addencounter, ...encounters]}
            })
        }
    })

    const handleDescription = (event) => {
        if (event.target.value.length <= 400) {
            setDescription(event.target.value)
            setCharacterCount(event.target.value.length)
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addencounter({
                variables: {encounterName, encounterDescription}
            });
            setName('');
            setDescription('');
            setCharacterCount(0);
        }   catch (event) {
            console.error(event)
        }
    };

    return (
        <div>
            <form
                onSubmit={handleFormSubmit}>
                    
                    <textarea
                    placeholder="Encounter Name ..."
                    value={encounterName}
                    ></textarea>

                    <p
                        className={` ${characterCount === 400 || error ? 'text-error' : ''}`}>
                            Character Count: {characterCount}/400
                            {error && <span> Something went wrong ... </span>}
                    </p>

                    <textarea
                        placeholder='Encounter Description ...'
                        value={encounterDescription}
                        onChange={handleDescription}
                    ></textarea>

                    <button tpye="submit">
                        Submit
                    </button>
            </form>
        </div>
    )
}

export default EncounterForm