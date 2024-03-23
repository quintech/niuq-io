import {api} from "../../../environment/config/config";

// Get the returned value from the third API

export function getFactMata(props) {
    return fetch(api.getFactMata.url + '?uuid=' + props.allData.uuid, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        },
    })
}
