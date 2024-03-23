// Set up all commonly used variables
const initState = {
    mostPopular: [],
    newDetail: [],
    otherNews: [],
};

// Set types
// Get all news button types
const ADD_NEWS_DATA = 'ADD_NEWS_DATA';
const CLEAN_NEWS_DATA = 'CLEAN_NEWS_DATA';
// Get popular news button type
const ADD_NEW_DETAIL = 'ADD_NEW_DETAIL';
// Get other news button type
const ADD_OTHER_NEWS = 'ADD_OTHER_NEWS';
const ADD_MOST_POPULAR = 'ADD_MOST_POPULAR';
const ADD_LATEST_NEWS = 'ADD_LATEST_NEWS';

// Determine the format of the returned data and handle it separately
const itemReducer = (state = initState, action) => {
    switch (action.type) {
        // Add news to the array
        case ADD_NEWS_DATA: {
            let newsDataArray = [];
            newsDataArray.push(action.add.itemNews)
            newsDataArray = [...new Set(newsDataArray)];
            return { newsData: newsDataArray };
        }
        // Clear all news arrays
        case CLEAN_NEWS_DATA: {
            return { newsData: [] };
        }
        // Add a single news item
        case ADD_NEW_DETAIL: {
            let newsDataArray = [];
            newsDataArray.push(action.add.itemNews)
            newsDataArray = [...new Set(newsDataArray)];
            return Object.assign({}, state, { newDetail: newsDataArray });
        }
        // Add other news
        case ADD_OTHER_NEWS: {
            let newsDataArray = [];
            newsDataArray.push(action.add.otherNews)
            newsDataArray = [...new Set(newsDataArray)];
            return Object.assign({}, state, { otherNews: newsDataArray });
        }
        case ADD_MOST_POPULAR: {
            let newsDataArray = [];
            newsDataArray.push(action.add.mostPopular)
            newsDataArray = [...new Set(newsDataArray)];
            return Object.assign({}, state, { mostPopular: newsDataArray });
        }
        case ADD_LATEST_NEWS: {
            let newsDataArray = [];
            newsDataArray.push(action.add.latestNews)
            newsDataArray = [...new Set(newsDataArray)];
            return Object.assign({}, state, { latestNews: newsDataArray });
        }
        default:
            return state;
    }
};

export {itemReducer};
