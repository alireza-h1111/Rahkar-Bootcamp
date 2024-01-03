import { Routes } from "@angular/router";
import { GettingOptionComponent } from "./getting-option/getting-option.component";
import { ListingOptionComponent } from "./listing-option/listing-option.component";

export const shopingList: Routes =[
    {
        path: "gettingList",
        component: GettingOptionComponent,
    },
    {
        path: "Listing",
        component: ListingOptionComponent,
    }
];