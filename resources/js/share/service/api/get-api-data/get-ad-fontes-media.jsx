import {api} from "../../../environment/config/config";

// Get the returned value from the first API call
export function getAdFontesMedia(props) {
    return fetch(api.getAdFontesMedia.url + '?uuid=' + props.allData.uuid, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        },
    })
}

