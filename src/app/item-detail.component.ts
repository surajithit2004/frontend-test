import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../service/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from './iitem';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  errorMessage = '';
  pageTitle: string = 'Item Details';
  item: IItem | undefined;
  constructor(private route: ActivatedRoute, private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getItemDetails(this.route.snapshot.params['id']);
  }

  getItemDetails(id: number) {
    this.itemsService.getItemDetails(id).subscribe({
      next: item => this.item = item,
      error: err => this.errorMessage = err
    });
  }

}
