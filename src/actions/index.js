// action creator function return action objects
export function setTechnology(text) {
    return {
        type: 'SET_TECHNOLOGY', // need type
        text: text
    }
}