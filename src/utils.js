import { names, surnames, drugs, areas } from "./data";

export function formatNumber(num){
    const numFormat = new Intl.NumberFormat('es-ES');
    return numFormat.format(num);
}

export function createPerson(){

    return {
        name: names[Math.floor(Math.random() * names.length)],
        surname: surnames[Math.floor(Math.random() * surnames.length)],
        area: areas[Math.floor(Math.random() * areas.length)].name
    }


}

export function nextDay(date){
    let newWeek = date.weekCount
    let newDay = date.weekDay

    if(date.weekDay === 7){
        newDay = 1
        newWeek++
    }
    else newDay++


    return {weekDay: newDay, weekCount: newWeek} 
}