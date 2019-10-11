import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// * ACTIONS IMPORT
import { startFetch, startCreateSmurf, startPost } from '../actions/smurfs';

// * COMPONENT IMPORTS
import { Form } from './Form';

const Display = (props) => {

    const { smurfs, localSmurfs } = props

    useEffect(() => {
        props.startFetch()
    }, [])

    const submit = (e, data) => {
        e.preventDefault()

        props.startCreateSmurf(data)
    }

    // ! LOG DATA!
    // console.log(smurfs, localSmurfs)
    // console.log(props)

    // * IF NEW SMURF EXIST, POST IT TO API
    startPost(localSmurfs && localSmurfs);

    return (
        <div>
            <h1>SMURFS HERE</h1>
            <Form submit={submit} />

            <section>
                {
                    smurfs.length > 0 && smurfs.map((smurf, key) => {
                        return <div
                            key={key}
                            className={`smurf__card`}>
                            <p>{smurf.name}</p>
                            <p>{smurf.age}</p>
                            <p>{smurf.height}</p>
                            <p>{smurf.id}</p>
                        </div>
                    })
                }
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfState.smurfs,
        localSmurfs: state.smurfState.localSmurf
    };
};

export default connect(mapStateToProps, { startFetch, startCreateSmurf, startPost })(Display)