const INVALID_EMAIL = "Invalid email format!";
const ALL_FIELDS_REQUIRED = "All fields are required!";
const EMAIL_REQUIRED = "Email can not be empty!";
const PASS_REQUIRED = "Password can not be empty!";
const USERNAME_EXIST = "Such username already registered!"
const EMAIL_EXIST = "Such email already registered!"
const PASS_MISMATCH = "Password mismatch!";
const BAD_CREDENTIALS = "Invalid email or password!";
const UNAUTHORIZED = "Unauthorized access!";
const getThrowErrorMessage = (err) => {
    if (err.errors){
        return Object.values(err.errors)[0].message;
    }
    return err.message;
}
const PAGE_NOT_FOUND = "Page Not Found!";
const USER_NOT_EXIST = "User not found!";
const ADD_TASK_FAILURE = "Unable to added task!";


const ERRORS = {
    INVALID_EMAIL,
    ALL_FIELDS_REQUIRED,
    EMAIL_REQUIRED,
    PASS_REQUIRED,
    PASS_MISMATCH,
    BAD_CREDENTIALS,
    USERNAME_EXIST,
    EMAIL_EXIST,
    getThrowErrorMessage,
    PAGE_NOT_FOUND,
    USER_NOT_EXIST,
    UNAUTHORIZED,
    ADD_TASK_FAILURE,
}

export default ERRORS;