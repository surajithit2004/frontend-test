import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Items';
  _listFilter = '';
  items: any[] = [];
  filteredItems: any[] = [];
  errorMessage = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredItems = this.listFilter ? this.performFilter(this.listFilter) : this.items;
  }

  constructor(private itemsService: ItemsService) { }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((item: any) =>
      item.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe({
      next: items => {
        this.items = items;
        this.filteredItems = items;
      },
      error: err => this.errorMessage = err
    });
  }

}
