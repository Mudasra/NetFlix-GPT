
export const CheckValidData = (name , email , password) => {
    const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    const isEmailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm.test(password)
    const errors = {};

    if(!isNameValid) {
        errors.name = (
            (
        <p><i className="fa-solid fa-circle-xmark pr-1 "></i>
        Name must contain only letters.</p>
        )
    )
    }  

    if(!isEmailValid) {
        errors.email = (
            (
        <p><i className="fa-solid fa-circle-xmark "></i>
       Please enter a vallid email address.</p>
        )
    )
    }      
     

    if(!isPasswordValid){
        errors.password = (
            <p key={password}>
            <i className="fa-solid fa-circle-xmark pr-1 "></i> 
            Please enter a valid password.</p> 
       
        )
        
    } 

    return Object.keys(errors).length === 0 ? null : errors;
}

