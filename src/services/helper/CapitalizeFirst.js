import { nameRegEx } from "../../constants/RegEx";

export const capitalizeFirstAlphabet = (name) => {
    let regEx = nameRegEx.test(name)
    if (!regEx) {
        return name
    }
    let firstAlphabet = name[0].toUpperCase();
    let remainingName = name.substring(1);
    let rename = firstAlphabet + remainingName;
    return rename;
}