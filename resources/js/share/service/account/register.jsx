import {api} from "../../environment/config/config";


export function register(props) {
    let formData = new FormData();
    formData.append('account', props.account);
    formData.append('password', props.password);
    return api.userRegister(formData)
}