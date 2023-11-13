namespace Validations {
    export const validateText = (text: String): boolean => {

        //forma corta
        return (text.length > 3) ? true : false;
        //forma larga
        // if (text.length > 3){
        //     return true;
        // } else {
        //     return false;
        // }
    }
    export const validateDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    }
}

console.log(Validations.validateText('Alex'))
