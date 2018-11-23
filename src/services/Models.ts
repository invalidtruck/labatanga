import { DateTime } from "ionic-angular/components/datetime/datetime"; 
import { DocumentChangeType, DocumentReference, DocumentData } from '@angular/fire/firestore';

export interface IUser {
    $key: string
    LastName: string
    FirstName: string
    LastName2: string
    Gender: string
    img: string
    rating: IRating
    Comments: IComments
    Email: string
    Phone: string
    Contracted: IContracted[],
    token: string,
    uidProvider:string,
    isProvider:Boolean
}
export interface IProviderComments
{
    user:IUser
    comment:String
    time:DateTime
}
export interface IQuery {
    $key: string
    CategoryID: number
    SubCategoryID: number
}


export interface IContracted {
    $key: string
    contracted_date: DateTime
}

export interface IRating {
    Proveedor: IProveedor

}
export interface IComments {
    Proveedor: IProveedor
}
export interface IProveedor {
    $key: string
    uid: string
    Address: string
    Category: number
    CategoryName: string
    City: string
    Comments: any
    CompanyName: string
    ComposeQuery: string
    Contracted: any
    CP: string
    Description: any
    Email: string
    FirstName: string
    LastName: string
    LastName2: string
    Name: string
    NoExt: string
    Phone: string
    rating: any,
    lastPayment: Date

}
export interface ICategories {
    $key: string
    Value: number
    Name: string
    SubCategories: ISubCategories
    img: string
}
export interface ISubCategories {
    $key: string
    Name: string
    Value: number
}
export interface IDataRequest {
    $key: string
    UserID: string
    Description: string
    time: string
    img: string
    timestamp: string
}