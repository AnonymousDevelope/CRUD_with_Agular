import { Component, Input } from '@angular/core';
import { WorksService } from '../works.service';
import { Works } from '../works';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [WorksService],
  host: {
    // '[class]': 'class', // Bind the 'class' input to the host property
    // 'class': 'w-100'
  }
})
export class TestComponent {
  works: Works[];
  workName: string = '';
  selectWork: any;
  @Input() class?: string;
  updateAddSwitch: string = 'update';

  constructor(private workSvc: WorksService) {
    this.works = this.workSvc.getWorksList();
    this.updateAddSwitch = this.workSvc.updateAddSwitch;
  }

  onAddNewWork(): void {
    this.workSvc.addWork(this.workName);
    this.workName = '';
  }

  selectWorks(works: any): void {
    this.selectWork = works[0];
    this.workName=(this.selectWork.work);
    console.log(this.selectWork);
  } 
  onUpdateWork(): void {
    this.workSvc.updateWork(this.selectWork.id, this.workName);
    this.updateAddSwitch = 'add';
    this.workName = '';
  }
}
