
export const CheckValidData = (name , email , password) => {
    const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    const isEmailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm.test(password)
    const errors = {};

    if(!isNameValid) {
        errors.name = "Name must contain only letters."
    }  

    if(!isEmailValid) {
        errors.email = "Please enter a vallid email address.";
    }      
     

    if(!isPasswordValid){
        errors.password = "Please enter a valid password."
 
    } 

    return Object.keys(errors).length === 0 ? null : errors;
}

