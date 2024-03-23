import {store} from '../modal/redux/store'
import { setNews } from '../modal/redux/actions/actions';

export const _setNews = (type,add) => {
    store.dispatch(setNews(type,add));
}

