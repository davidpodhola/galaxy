import {combineReducers} from 'redux'
import {ADD_COLLECTION, REMOVE_COLLECTION} from './actions'

const initialState = {
    collections: [
        {
            id: 1,
            name: "mock1",
            info: "more info"
        }, {
            id: 2,
            name: "mock2",
            info: "more info"
        }, {
            id: 3,
            name: "mock3",
            info: "more info"
        }, {
            id: 4,
            name: "mock4",
            info: "more info"
        }, {
            id: 5,
            name: "mock5",
            info: "more info"
        }, {
            id: 6,
            name: "mock6",
            info: "more info"
        }, {
            id: 7,
            name: "mock7",
            info: "more info"
        }
    ]
}

function collectionsReducer(state = initialState, action) {

    console.log('@collectionsReducer');

    switch (action.type) {
        case ADD_COLLECTION:
            // return {
            //     ...state,
            //     collections: [
            //         ...state.collections, {
            //             id: action.id,
            //             name: action.name,
            //             info: action.info
            //         }
            //     ]
            // }
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    info: action.info
                }
            ]
        case REMOVE_COLLECTION:
            return [
                ...state,
                state.collections.filter((collection) => {
                    return collection.id != action.id
                })
            ]
        default:
            return initialState
    }
}

const rootReducer = combineReducers({collectionsReducer})

export default rootReducer
