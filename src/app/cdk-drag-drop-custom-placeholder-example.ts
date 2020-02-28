import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

/**
 * @title Drag&Drop custom placeholer
 */
@Component({
  selector: "cdk-drag-drop-custom-placeholder-example",
  templateUrl: "cdk-drag-drop-custom-placeholder-example.html",
  styleUrls: ["cdk-drag-drop-custom-placeholder-example.css"]
})
export class CdkDragDropCustomPlaceholderExample {
  movies = [
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
    "Episode V - The Empire Strikes Back",
    "Episode VI - Return of the Jedi",
    "Episode VII - The Force Awakens",
    "Episode VIII - The Last Jedi",
    "Episode IX – The Rise of Skywalker"
  ];
  headerData = [
    {
      Name: "FName",
      DisplayName: "First Name"
    },
    {
      Name: "LName",
      DisplayName: "Last Name"
    },
    {
      Name: "Age",
      DisplayName: "Age"
    },
    {
      Name: "PNumber",
      DisplayName: "Phone Number"
    },
    {
      Name: "Address",
      DisplayName: "Address"
    },
    {
      Name: "Gender",
      DisplayName: "Gender"
    }
  ];
  TableData = [
    {
      id: 1,
      FName: "Sumeet",
      LName: "Gupta",
      Age: "26",
      PNumber: "9873453445",
      Address: "Patna",
      Gender: "Male"
    },
    {
      id: 2,
      FName: "Somanath",
      LName: "Saha",
      Age: "26",
      PNumber: "9873453445",
      Address: "Banglaore",
      Gender: "Male"
    },
    {
      id: 3,
      FName: "Rupali",
      LName: "Dev",
      Age: "26",
      PNumber: "9873453445",
      Address: "Kohlapur",
      Gender: "Female"
    },
    {
      id: 4,
      FName: "Shivraj",
      LName: "Desai",
      Age: "26",
      PNumber: "9873453445",
      Address: "Belgaum",
      Gender: "Male"
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.headerData, event.previousIndex, event.currentIndex);
  }
}
