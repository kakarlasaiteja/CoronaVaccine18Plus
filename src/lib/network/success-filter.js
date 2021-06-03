export default (jsonPromise => {

    return new Promise((resolve, reject) => {
        jsonPromise.then(json => {
            if (json.hasOwnProperty('failureMessageBean')) {
                json.FailureMessageBean = json.failureMessageBean
                delete json.failureMessageBean
            }
            if (json.hasOwnProperty('FailureMessageBean')) {
                reject(json);
            } else {
                resolve(json)
            }
        }).catch(json => reject(json))
    })
})