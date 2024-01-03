import { Component, inject } from '@angular/core';
import { ListingOptionComponent } from "../listing-option/listing-option.component";
import { IShop } from '../../typings/shopingListTypes.modules';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { shopingListApiService } from '../../shopingListApi.service';
import { ShopingListSubmitType } from '../../enums/shoping-list-submit-type';

@Component({
    selector: 'app-getting-option',
    standalone: true,
    templateUrl: './getting-option.component.html',
    styleUrl: './getting-option.component.scss',
    imports: [ListingOptionComponent, ReactiveFormsModule, FormsModule, CommonModule]
})
export class GettingOptionComponent {
    constructor( private fBuilder : FormBuilder, private DBservice : shopingListApiService) {
        //for showing list after any changes
        this.getItems();
    }
    ngOnChanges(){
        this.getItems();
    }
    // for getting item from user
    form :FormGroup= this.fBuilder.group({
        title: ['', Validators.required]
    })
    //for changing button type
    buttonType = ShopingListSubmitType.submit

    list: IShop[] = []
    //for sending id for editting
    selectedItemId !: number ;
    
    gettingListOptionSubmit() {

        //sending an item to db
        if (this.buttonType == ShopingListSubmitType.submit) {
            this.DBservice.sendingItemToDB(this.form.value).subscribe({
                next: (data) => {
                    console.log(data);
                    this.getItems();
                },
                error: (error) => {
    
                },
                complete: () => {
    
                }
            })
        }
        
        // editing item
        if (this.buttonType== ShopingListSubmitType.update) {
            this.DBservice.edit(this.form.value,this.selectedItemId).subscribe({
                next: (data) => {
                    this.list = data.result
                    this.getItems();
                },
                error: (error) => {
    
                },
                complete: () => {
                    this.buttonType = ShopingListSubmitType.submit
                }
            }) 
        }
        
        
        this.form.reset();
    }
    //getting list for showing to user 
    getItems() {
        this.DBservice.gettingItemsFromDB().subscribe({
            next: (data) => {                
                this.list = data.result
            },
            error: (error) => {

            },
            complete: () => {

            }
        })
    }
    // is done option button
    changeStatusIsDone(optionId: number) {

        this.DBservice.changeStatusInDB(optionId).subscribe({
            
            next: (data) => {
                this.getItems();
            },
            error: (error) => {

            },
            complete: () => {

            }
        })
    }
    // delete option button 
    deleteOption(optionId: number) {
        this.DBservice.deleteOPtion(optionId).subscribe({
            next: (data) => {
                this.getItems();
            },
            error: (error) => {

            },
            complete: () => {

            }
        })
    }
    // edite option button
    editOption(optionId: number) {
        this.DBservice.getForEdit(optionId).subscribe({
            next: (data) => {                
                this.form.get('title')?.setValue(data.result[0].title);
                this.buttonType=ShopingListSubmitType.update;
                this.selectedItemId = optionId
            },
            complete: () => {

            }
        })
    }
}
