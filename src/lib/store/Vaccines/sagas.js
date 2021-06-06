/* eslint-disable array-callback-return */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
import { take, put, call, select } from "redux-saga/effects";
import axios from 'axios'

import { getJson, postJson } from '../../lib'
import * as actions from './actions'

export const postData = function (url, data) {
  return postJson({ url: url, data: data })
}

export const getData = function (url) {
  return getJson({ url: url })
}

export const getAxiosData = function (url, headers) {
  axios.get(url, {
    headers: headers
  }).then(res => {
    return res
  })
}

const getSCount = (state) => state.app.vaccineDetails.countedStates

const getDCount = (state) => state.app.vaccineDetails.countedDistricts

export const loadStates = function* () {
  while (true) {
    yield take(actions.FETCH_STATES)
    let api = "https://cdn-api.co-vin.in/api/v2/admin/location/states"
    try {
      const results = yield call(getData, api)
      if (results.states) {
        yield put(actions.loadStatesSuccess(results))
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const loadDistricts = function* () {
  while (true) {
    const districtAction = yield take(actions.FETCH_DISTRICTS)
    let state_id = districtAction.payload
    let api = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + state_id
      try {
        const results = yield call(getData, api)
        if (results.districts) {
          yield put(actions.loadDistrictsSuccess(results))
        }
      } catch (error) {
        console.log('error', error)
      }
  }
}

export const loadCenters = function* () {
  while (true) {
    const centersAction = yield take(actions.FETCH_CENTERS)
    let districts = centersAction.payload
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    for (let district of districts) {
      let api = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district.district_id + "&date=" + dd + "-" + mm + "-" + yyyy
      try {
        const results = yield call(getData, api)
        if (results.centers) {
          yield put(actions.loadCentersSuccess(results))
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}

export const loadSingleDistrict = function* () {
  while (true) {
    const centersAction = yield take(actions.FETCH_SINGLE_DISTRICT_CENTERS)
    let district_id = centersAction.payload
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let api = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district_id + "&date=" + dd + "-" + mm + "-" + yyyy
    try {
      const results = yield call(getData, api)
      let centersFor18 = []
      if (results.centers && results.centers.length > 0) {
        if (results.centers && results.centers.length > 0) {
          results.centers.map(center => {
            if (center.sessions && center.sessions.length > 0) {
              if(checkFor18PlusAvailability(center)){
                centersFor18.push(center)
              }
            }
          })
        }
        centersFor18.length === 0 ? yield put(actions.loadSingleDistrictCentersSuccess([])) : yield put(actions.loadSingleDistrictCentersSuccess(centersFor18))
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const checkFor18PlusAvailability = function(center) {
  let exists = false
  center.sessions.map(session => {
    if (session.min_age_limit && session.min_age_limit === 18) {
      exists = true
    }
  })
  return exists
}