import { combineReducers } from 'redux'

const ADD_COLLECTION = 'ADD_COLLECTION'
const REMOVE_COLLECTION = 'REMOVE_COLLECTION'

const initialState = {
  collections : [{
          name: "mock1",
          info: "more info"
      }, {
          name: "mock2",
          info: "more info"
      }, {
          name: "mock3",
          info: "more info"
      }, {
          name: "mock4",
          info: "more info"
      }, {
          name: "mock5",
          info: "more info"
      }, {
          name: "mock6",
          info: "more info"
      },
      {
          name: "mock7",
          info: "more info"
      },
  ]
}

function collectionsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COLLECTION:
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
        // TODO
      ]
    default:
      return initialState
  }
}


const rootReducer = combineReducers({
 collectionsReducer,
})

export default rootReducer
