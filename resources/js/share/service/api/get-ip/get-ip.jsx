// Get the value returned from the first API
import { api } from "../../../environment/config/config";

export function getIp() {
    return fetch(api.getIP.url, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        },
    })
}
