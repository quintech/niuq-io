import {api} from "../../../environment/config/config";

// Get the returned value from the second API
export function getMediaBiasFackCheck(props) {
    return fetch(api.getMediaBiasFackCheck.url + '?uuid=' + props.allData.uuid, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        },
    })
}
