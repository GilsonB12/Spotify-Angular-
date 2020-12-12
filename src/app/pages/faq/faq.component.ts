import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  indexContainer = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleComponent(index) {
    const containers = document.getElementById("nav-tabContent");
    const listTab = document.getElementById("list-tab");
    
    if (index !== this.indexContainer) {
      const activateContainer = containers.children[index];
      const previousContainer = containers.children[this.indexContainer];

      const activateListTab = listTab.children[index];
      const previousListTab = listTab.children[this.indexContainer];
      
      previousListTab.className = "list-group-item list-group-item-action"
      activateListTab.className = "list-group-item list-group-item-action active"

      previousContainer.className = "tab-pane fade";
      activateContainer.className = "tab-pane fade show active";

      this.indexContainer = index;
    }

  }
}
