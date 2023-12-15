import { useEffect, useState } from "react"
import { nextDay } from "../utils"

export default function Clock(){

    const [time, setTime] = useState(1430)
    const [date, setDate] = useState({
        weekDay: 1,
        weekCount: 1
    })

    useEffect(() => {

        const interval = setInterval(()=>{
            setTime(oldTime => oldTime + 1)
        }, 1000)


        

        return () => clearInterval(interval)
    },[])

    useEffect(()=>{
        if(time >= 1440) {
            setTime(0)
            setDate(oldDate => nextDay(oldDate))
        }
    },[time])

    
    
    const hours = Math.floor((time % 3600) / 60);
    const minutes = time % 60;
    

    const formatTime = num => num.toString().padStart(2, '0');

    const daysArr = ['MON', 'TU', 'WED', 'THU', 'FRI', 'SAT', 'SUN']



    return (
        <div className="time">
            <p>{`${formatTime(hours)}:${formatTime(minutes)}`}</p>
            <p>{daysArr[date.weekDay - 1]}</p>
        </div>
    )
}