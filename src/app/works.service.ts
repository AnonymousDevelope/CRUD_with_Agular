import { Injectable } from "@angular/core";
import { Works } from "./works";

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  public updateAddSwitch: string = 'add';
  private worksList: Works[] = [
    {
      id: 1,
      title: 'Work 1',
      work: 'See on Map'
    },
    {
      id: 2,
      title: 'Work 2',
      work: 'Read a Book'
    },
    {
      id: 3,
      title: 'Work 3',
      work: 'Learn Angular'
    },
  ];

  getWorksList(): Works[] {
    return this.worksList;
  }

  addWork(newWork: string): void {
    // Assuming that the 'id' is unique and auto-incremented, you can generate a new id
    // Push the new work into the list
    this.worksList.push({
      id: this.worksList.length + 1,
      title: `Work ${this.worksList.length + 1}`,
      work: newWork,
    });
  }
  updateWork(id: number, newWork: string): void {
    const index = this.worksList.findIndex((work) => work.id === id);
    if (index !== -1) {
      this.worksList[index].work = newWork;
      console.log(this.worksList);
    }
  }
  deleteWork(id: number): void {
    console.log("Deleting work with id:", id);
    console.log("Before deletion:", this.worksList);

    this.worksList = this.worksList.filter((work) => work.id !== id);

    console.log("After deletion:", this.worksList);
  }
}
