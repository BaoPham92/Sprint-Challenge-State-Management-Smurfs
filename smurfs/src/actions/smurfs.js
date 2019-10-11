import axios from 'axios';

// * SMURF TYPES
export const CREATE_SMURF = 'CREATE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const FETCHING = 'FETCHING';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_INCOMPLETE = 'FETCH_INCOMPLETE';

export const createSmurf = (smurfInfo) => {
    console.log(smurfInfo)
    return ({
        type: CREATE_SMURF,
        payload: smurfInfo
    })
}

export const updateSmurf = (smurfInfo) => ({
    type: UPDATE_SMURF,
    payload: smurfInfo
})

export const fetch = (action, data) => ({
    type: action,
    payload: data
})

export const startCreateSmurf = (smurfData) => {
    return (dispatch) => {
        return dispatch(createSmurf(smurfData))
    }
}

export const startUpdateSmurf = (smurfData) => {
    return (dispatch) => {
        return dispatch(updateSmurf(smurfData))
    }
}

export const startFetch = () => {

    return (dispatch) => {
        dispatch(fetch(FETCHING, {}));

        return axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                // ! LOG DATA!
                // console.log(res.data)

                return res.data && dispatch(fetch(FETCH_COMPLETE, res.data))
            })
            .catch(err => {
                return err && dispatch(fetch(FETCH_INCOMPLETE, err))
            })
    }
}

export const startPost = (localSmurfs) => {

    localSmurfs &&
        localSmurfs.length > 0 &&
        localSmurfs.map(smurf => {
            axios.post(`http://localhost:3333/smurfs/`, smurf)
                .then(res => {
                    // ! LOG DATA!
                    // console.log(res.data)

                    return console.log(res)
                })
                .catch(err => {
                    return console.log(err)
                })
        })
}