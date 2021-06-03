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
    let states = districtAction.payload
    for (let state of states) {
      let api = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + state.state_id
      try {
        const results = yield call(getData, api)
        if (results.districts) {
          let sCount = yield select(getSCount)
          yield put(actions.loadDistrictsSuccess(results))
          // yield put(actions.takeCountedStates(sCount + 1))
          let districts = results.districts
          console.log('districts: ', districts)
          let today = new Date();
          let dd = String(today.getDate()).padStart(2, '0');
          let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          let yyyy = today.getFullYear();
          for (let district of districts) {
            let api = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" + district.district_id + "&date=" + dd + "-" + mm + "-" + yyyy
            try {
              const results = yield call(getData, api)
              if (results.centers) {
                let dCount = yield select(getDCount)
                yield put(actions.loadCentersSuccess(results))
                // yield put(actions.takeCountedDistricts(dCount + 1))
              }
            } catch (error) {
              console.log('error', error)
            }
          }
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}

// https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=5&date=03-06-2021

export const loadCenters = function* () {
  while (true) {
    const centersAction = yield take(actions.FETCH_CENTERS)
    let districts = centersAction.payload
    console.log('districts: ', districts)
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