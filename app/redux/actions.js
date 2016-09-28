/*
 * action types
 */

export const ADD_COLLECTION = 'ADD_COLLECTION'
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION'

/*
 * action creators
 */

let nextCollectionId = 8

export function addCollection() {

    console.log('@addCollection');

    return {
        type: ADD_COLLECTION,
        id: nextCollectionId++,
        name: 'mock',
        info: 'more_info'
    }
}
