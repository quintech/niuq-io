// Convert to 20xx-xx-xx format, with leading zeros for month and day if less than 10
export const dateFormat = (date) => {
    if (date.length === 10){
        return date
    }else {
        let year = date.getFullYear();
        let month = (date.getMonth() + 1);
        let day = date.getDate();

        if (month < 10){
            month = '0' + month;
        }
        if (day < 10){
            day = '0' + day;
        }
        let forDate = year+'-'+month+'-'+day
        return forDate;
    }
    // let d = new Date(date),
    // month = '' + (d.getMonth() + 1),
    // day = '' + d.getDate(),
    // year = d.getFullYear();

    // if (month.length < 2)
    //     month = '0' + month;
    // if (day.length < 2)
    //     day = '0' + day;

}
