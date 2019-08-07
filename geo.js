const request = require("request")

const getgeo = (address, callback) => {
    const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmliaHVkcm9nbzEyMyIsImEiOiJjankzYjZuOXQweG5kM2hrMjB5MzMwNXVhIn0.l58YkK6tPS3gNUVrWFqGtA'

    request({ url: url2, json: true }, (err, response) => {
        if (err) {
            callback("Can't connect to the network", undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                place: response.body.features[0].place_name
            })

        }
    })
}

module.exports = getgeo