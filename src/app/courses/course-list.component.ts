import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { select, NgRedux } from 'ng2-redux'
import { Observable } from 'rxjs/Observable'
import { CourseActions } from '../store/course.actions';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('courses') courses:  Observable<Course>; // Автоматично ги взима първоначално и автоматично им прави ъпдейт
  @select('filterCourses') filterCourses: Observable<Course>;

  constructor(private courseActions: CourseActions){ }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.courseActions.filterCourses(searchText)
  }

  ngOnInit() {
    this.courseActions.getCourses();
    componentHandler.upgradeDom();
  }
}
