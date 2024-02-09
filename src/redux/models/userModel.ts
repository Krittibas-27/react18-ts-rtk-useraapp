export interface UserDataModel {
    username: string;
    email:    string;
    phone:    string;
    active:   boolean;
    id:       number | string;
}
export interface IValidationError {
    username: string;
    email: string;
    phone: string;
}
export interface IEditUser extends IValidationError {
    active : boolean
}
export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const phonePattern = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/