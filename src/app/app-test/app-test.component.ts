import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Works } from '../works';
import { WorksService } from '../works.service';
@Component({
  selector: 'app-app-test',
  templateUrl: './app-test.component.html',
  styleUrl: './app-test.component.scss',
})
export class AppTestComponent implements OnInit {
  works: Works[] = [];
  @Output() updateAddSwitch = new EventEmitter<string>();
  @Output() selectWorks = new EventEmitter<any>();
  constructor(private workSvc: WorksService) {
    this.works = this.workSvc.getWorksList();
  }
  ngOnInit(): void {

  }
  onDelete(id:number){
    if(id){
      this.workSvc.deleteWork(id);
      this.works = this.workSvc.getWorksList();
    }
  }
  onEdit(id?: number): void {
    this.updateAddSwitch.emit('update');
    let editWorkName: any;
    if (id) {
      editWorkName = this.works.filter(work => work.id == id);
      this.selectWorks.emit(editWorkName);
    }
  }
}
