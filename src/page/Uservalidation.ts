import { UserDataModel, IValidationError } from "../redux/models/userModel"

export const Uservalidation = (value: UserDataModel) => {
    const errMsg:IValidationError={
        username:'',
        email:'',
        phone:''
    }
    //console.log(Object.keys(errMsg).length)
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const phonePattern = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    //const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/
    if(!value.username.trim() ){
        errMsg.username = "Name is Require"
    }else if(value.username.length < 3){
        errMsg.username = "Name must be 3 character"
    }
    if(!value.email.trim()){
        errMsg.email = "Email is Require"
    } else if(!emailPattern.test(value.email)){
        errMsg.email = "Email not correct"
    }

    if(!value.phone.trim()){
        errMsg.phone = "Phone is Require"
    } else if(!phonePattern.test(value.phone)){
        errMsg.phone = "Phone not correct"
    }

//console.log(errMsg)
    return errMsg
}