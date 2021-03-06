import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import {Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
 // @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  //@ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });

    //shoppingListService
  }
  onSubmit(form: NgForm){
  	//const ingName = this.nameInputRef.nativeElement.value;
  	//const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
  	const newIngredient = new Ingredient(value.name, value.amount);
    //this.shoppingListService.addIngredients(newIngredient);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else{
      this.shoppingListService.addIngredients(newIngredient);
    }
    this.editMode = false;
  	//this.ingredientAdded.emit(newIngredient);
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
