import { names, surnames, drugs, areas } from "./data";

export function formatNumber(num){
    const numFormat = new Intl.NumberFormat('es-ES');
    return numFormat.format(num);
}

export function createPerson(){

    return {
        name: names[Math.floor(Math.random() * names.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)],
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

export function nextLevel({level, points, nextLevelPoints}){
    let newXpData = {
        level: level,
        points: points,
        nextLevelPoints: nextLevelPoints
    }

    if(points >= nextLevelPoints){
        newXpData.level++
        newXpData.points = points - nextLevelPoints
        newXpData.nextLevelPoints = nextLevelPoints * 1.25
    }

    return newXpData
}

export function addXp(xpData, points){
    let newXpData = {
        ...xpData,
        points: xpData.points + points
    }

    newXpData = nextLevel(newXpData)

    return newXpData
}