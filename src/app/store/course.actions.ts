import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux'
import { IAppState } from './IAppState';
import { CourseService } from '../courses/course.service';

import { FILTER_COURSES, REQUEST_COURSES_SUCCESS } from './actions';

@Injectable()
export class CourseActions {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private courseService: CourseService ){ }

    getCourses() {
        this.courseService.getCourses().subscribe((payload)=>{
            this.ngRedux.dispatch({
                type: REQUEST_COURSES_SUCCESS,
                payload
            })
        })
    }

    filterCourses(searchText: string){
        this.ngRedux.dispatch({
            type: FILTER_COURSES,
            payload: searchText
        })
    }
}