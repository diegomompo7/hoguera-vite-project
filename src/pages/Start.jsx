import { useEffect, useState } from "react";

export const Start = () => {

  let dateEnd = new Date("2024-06-19 00:00:00");
  let [year, setYear] = useState(0)
  let [month, setMonth] = useState(0)
  let [day, setDay] = useState(0)
  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)
  let now = new Date()

  useEffect(() => {

    setYear(dateEnd.getFullYear() - now.getFullYear())
    setMonth(dateEnd.getMonth() - now.getMonth())
    setDay(dateEnd.getDate() - now.getDate())

    setHours(dateEnd.getHours()+24 - now.getHours())
    
    setMinutes(dateEnd.getMinutes()+60 - now.getMinutes())
    
    setSeconds(dateEnd.getSeconds()+60 - now.getSeconds())
    
  },[])

    return (
        <div>
                <p>{year != 0 && year + " year "}</p>
                <p>{month != 0 && month + " month "}</p>
                <p>{day != 0 && day + (day === 1 ? " day": " days ")}</p>
                <p>{hours} horas</p>
                <p>{minutes} minutes</p>
                <p>{seconds} seconds</p>
        </div>
    )
}