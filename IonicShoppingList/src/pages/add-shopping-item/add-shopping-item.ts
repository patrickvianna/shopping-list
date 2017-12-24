import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from './../../models/item/item.model'
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  AddItem(item: Item){
    this.shopping.AddItem(item).then(ref=>{
      this.navCtrl.setRoot('HomePage', { key: ref.key });
    })
  }
}
