export const FETCH_STATES = 'FETCH_STATES'
export const FETCH_DISTRICTS = 'FETCH_DISTRICTS'
export const FETCH_CENTERS = 'FETCH_CENTERS'
export const LOAD_STATES_SUCCESS = 'LOAD_STATES_SUCCESS'
export const LOAD_DISTRICTS_SUCCESS = 'LOAD_DISTRICTS_SUCCESS'
export const LOAD_CENTERS_SUCCESS = 'LOAD_CENTERS_SUCCESS'
export const TAKE_STATES_LENGTH = "TAKE_STATES_LENGTH"
export const TAKE_DISTRICTS_LENGTH = "TAKE_DISTRICTS_LENGTH"
export const TAKE_CENTERS_LENGTH = "TAKE_CENTERS_LENGTH"
export const TAKE_COUNTED_STATES = "TAKE_COUNTED_STATES"
export const TAKE_COUNTED_DISTRICTS = "TAKE_COUNTED_DISTRICTS"
export const TAKE_COUNTED_CENTERS = "TAKE_COUNTED_CENTERS"
export const FETCH_SINGLE_DISTRICT_CENTERS = "FETCH_SINGLE_DISTRICT_CENTERS"
export const LOAD_SINGLE_DISTRICT_CENTERS = "LOAD_SINGLE_DISTRICT_CENTERS"

export const fetchStates = () => ({
    type: FETCH_STATES
})

export const fetchDistricts = (payload) => ({
    type: FETCH_DISTRICTS,
    payload
})

export const fetchCenters = (payload) => ({
    type: FETCH_CENTERS
})

export const loadStatesSuccess = payload => ({
    type: LOAD_STATES_SUCCESS,
    payload
})

export const loadDistrictsSuccess = payload => ({
    type: LOAD_DISTRICTS_SUCCESS,
    payload
})

export const loadCentersSuccess = payload => ({
    type: LOAD_CENTERS_SUCCESS,
    payload
})

export const takeCountedStates = payload => ({
    type: LOAD_CENTERS_SUCCESS,
    payload
})

export const takeCountedDistricts = payload => ({
    type: LOAD_CENTERS_SUCCESS,
    payload
})

export const fetchSingleDistrictCenters = () => ({
    type: FETCH_SINGLE_DISTRICT_CENTERS
})

export const loadSingleDistrictCentersSuccess = payload => ({
    type: LOAD_SINGLE_DISTRICT_CENTERS,
    payload
})