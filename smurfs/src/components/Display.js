import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// * ACTIONS IMPORT
import { startFetch } from '../actions/smurfs';

const Display = (props) => {

    const { smurfs } = props

    useEffect(() => {
        props.startFetch()
    }, [])

    // ! LOG DATA!
    // console.log(smurfs)
    // console.log(props)

    return (
        <div>
            <h1>SMURFS HERE</h1>
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
    // console.log(state.smurfState)
    return {
        smurfs: state.smurfState.smurfs,
    };
};

export default connect(mapStateToProps, { startFetch })(Display)