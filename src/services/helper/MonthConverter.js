export const monthConverter = (month) => {
    switch (month) {
        case 0: // January
            return "January";
        case 1: // February
            return "February";
        case 2: // March
            return "March";
        case 3: // April
            return "April";
        case 4: // May
            return "May";
        case 5: // June
            return "June";
        case 6: // July
            return "July";
        case 7: // August
            return "August";
        case 8: // September
            return "September";
        case 9: // October
            return "October";
        case 10: // November
            return "November";
        case 11: // December
            return "December";
        default: // Default Day
            return "";
    }
};

export const formatingDate = (value) => {
    let globalDate = new Date(value);
    //
    let birthYear = globalDate.getFullYear();
    let birthMonthNum = globalDate.getMonth();
    let birthMonthName = monthConverter(birthMonthNum);
    let birthDay = globalDate.getDate();
    //
    let formated = `${birthDay} ${birthMonthName} ${birthYear}`
    return formated
}
