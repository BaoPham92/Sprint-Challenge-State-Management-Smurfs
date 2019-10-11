import React, { useState } from 'react';
import { start } from 'repl';

export const Form = (props) => {

    const { submit } = props

    // * SMURF STATE
    const [smurf, setSmurf] = useState({})

    const setInfo = (e) => {
        e.preventDefault()

        // * SET SMURF
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    console.log(smurf)

    return (
        <form onSubmit={(e) => submit(e, smurf)}>
            <input
                onChange={(e) => setInfo(e)}
                type="text"
                name="name"
                placeholder="name"
            />

            <input
                onChange={(e) => setInfo(e)}
                type="text"
                name="age"
                placeholder="age"
            />

            <input
                onChange={(e) => setInfo(e)}
                type="text"
                name="height"
                placeholder="height"
            />

            <button>Submit</button>
        </form>
    )
}