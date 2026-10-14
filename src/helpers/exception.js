class Exception extends Error {
   constructor(statusCode, errors){
    if(Array.isArray(errors)){
        super("Validation Failed")
        this.baseMessage = "Validation Failed"
        this.errors = errors
    }else{
        super(errors)
        this.baseMessage = errors
    }
    this.statusCode = statusCode
   }
}
export default Exception