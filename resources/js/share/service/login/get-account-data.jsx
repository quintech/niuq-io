// Get Google user account data
import { api } from "../../environment/config/config";

/**
 * 
 * @param {google_id} google_id
 * @returns Promise
 */
export const getGoogleAccountData = (google_id) => {
    return api.getGoogleAccountData({google_id:google_id})
}
