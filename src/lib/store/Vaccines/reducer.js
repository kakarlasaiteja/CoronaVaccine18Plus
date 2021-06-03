/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import Immutable from "immutable";
import * as actions from './actions'

const VaccineRecord = Immutable.Record({
    statesList: null,
    districtsList: [],
    centresList: [],
    countedStates: 0,
    countedDistricts: 0,
})

const initialState = new VaccineRecord()

function vaccineReducer(state = initialState, action){
    switch(action.type){
        case actions.LOAD_STATES_SUCCESS: {
            const stateDetails = action.payload.states
            return state.merge({ statesList: stateDetails})
        }
        case actions.LOAD_DISTRICTS_SUCCESS: {
            const districtDetails = action.payload.districts
            return {
                ...state,
                districtsList: [...state.districtsList, ...districtDetails]
            }
        }
        case actions.LOAD_CENTERS_SUCCESS: {
            const centerDetails = action.payload.centers
            return {
                ...state,
                centersList: [...state.centersList, ...centerDetails]
            }
        }
        case actions.TAKE_COUNTED_STATES: {
            const count = action.payload
            return state.merge({ countedStates: count})
        }
        case actions.TAKE_COUNTED_DISTRICTS: {
            const count = action.payload
            return state.merge({ countedDistricts: count})
        }
        default:
            return state
    }
}

export default vaccineReducer