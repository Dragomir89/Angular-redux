import { IAppState } from './IAppState'
import { FILTER_COURSES, REQUEST_COURSES_SUCCESS } from './actions'


const mycourses = [
    // {id: 1, name: 'test 01', topic: 'test 001'},
    // {id: 2, name: 'test 02', topic: 'test 002'},
    // {id: 3, name: 'test 03', topic: 'test 003'}
]

const initialState: IAppState = {
    courses: mycourses,
    filterCourses: mycourses
} 

function getCourses(state, action){
    return Object.assign({}, state, {
        courses: action.payload,
        filterCourses: action.payload
    }) 
}

function filterCourses(state, action){
    return Object.assign({}, state, {
        filterCourses: state.courses.filter((c)=> {
            return c.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
        })
    })
}

export function reducer(state = initialState, action){
    console.log('reducer ')
    console.log(action)
    switch (action.type) {
        case FILTER_COURSES:
            return filterCourses(state, action);
    
        case REQUEST_COURSES_SUCCESS: 
            console.log(getCourses(state, action))
            return getCourses(state, action)

        default:
            console.log('default state ->')
            console.log(state)
            return state
    }
}