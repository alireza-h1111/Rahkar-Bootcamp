import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListSubmitType } from '../enums/list-submit-type';
import { apiService } from '../apiService.service';
import { IMemory } from '../typings/memoryListTypes.modules';
import { ListComponent } from '../list/list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule, ListComponent],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent {
    updateId: string | null | undefined | number;


    constructor(private fBuilder: FormBuilder,
        private DBservice: apiService,
        private route : Router,
        private router : ActivatedRoute ) {

        }
    
    ngOnInit(): void {
        this.updateId=this.router.snapshot.paramMap.get('itemId')
        console.log(this.updateId);
        if(this.updateId?.length){
            this.updateId = parseInt(this.updateId)
            this.edittingOption(this.updateId) 

        }
        
    }

    selectedItemId !: number;
    buttonType = ListSubmitType.submit



    // for getting item from user
    form: FormGroup = this.fBuilder.group({
        title: ['', Validators.required]
    })



    gettingListOptionSubmit() {

        //sending an item to db
        if (this.buttonType == ListSubmitType.submit) {
            this.DBservice.sendingItemToDB(this.form.value).subscribe({
                next: (data) => {

                },
                complete: () => {

                }
            })
        }

        // editing item
        if (this.buttonType == ListSubmitType.update) {
            this.DBservice.edit(this.form.value, this.selectedItemId).subscribe({
                next: (data) => {

                },
                complete: () => {
                    this.buttonType = ListSubmitType.submit
                }
            })
        }
        this.form.reset();
    }




    // edite option button
    edittingOption(optionId: number) {
        console.log(optionId)
        this.DBservice.getForEdit(optionId).subscribe({
            next: (data) => {
                this.form.get('title')?.setValue(data.result[0].title);
                this.buttonType = ListSubmitType.update;
                this.selectedItemId = optionId
            },
            complete: () => {

            }
        })
    }

}

