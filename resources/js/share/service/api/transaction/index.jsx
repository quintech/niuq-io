// User shares news to receive tokens
import { api } from "../../../environment/config/config";

export function giveUserNiuq(props, shareNewsURL) {
    let formData = new FormData();
    formData.append('time', props.useTime);
    formData.append('userAccessToken', props.userAccessToken);
    formData.append('userEmail', props.userEmail);
    formData.append('userGoogleID', props.userGoogleID);
    formData.append('userImg', props.userImg);
    formData.append('userName', props.userName);
    formData.append('shareNewsURL', shareNewsURL);

    return api.giveNiuq(formData);
}

// Get transaction history
export function getUserTransaction(props) {
    return api.getTransactionHistory({ google_id: props.userGoogleID });
}
