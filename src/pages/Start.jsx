import { useEffect, useState } from "react";
import {FormattedMessage } from "react-intl";

export const Start = () => {

  let dateEnd = new Date("2024-06-19 00:00:00");
  let [year, setYear] = useState(0)
  let [month, setMonth] = useState(0)
  let [day, setDay] = useState(0)
  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const timeDiff = dateEnd - now;
      if (timeDiff > 0) {

        let hour = dateEnd.getHours() + 24 - now.getHours()
        let minute = dateEnd.getMinutes() + 60 - now.getMinutes()
        let second = dateEnd.getSeconds() + 60 - now.getSeconds()

        setYear(dateEnd.getFullYear() - now.getFullYear())
        setMonth(dateEnd.getMonth() - now.getMonth())
        setDay(dateEnd.getDate() - now.getDate())
        setHours(hour === 60 ? 0 : hour)
        setMinutes(minute === 60 ? 0 : minute)
        setSeconds(second === 60 ? 0 : second)

      } else {
        clearInterval(timer);
      }
    }, 1000)

  }, [])

  return (
    <div className="time">
      {year !== 0 && <p>{year} <FormattedMessage id="year" /></p>}
      {month !== 0 && <p>{month} <FormattedMessage id="month" /></p>}
      {day !== 0 && <p>{day} {day === 1 ? <FormattedMessage id="day" /> : <FormattedMessage id="days" />}</p>}
      <p>{hours<10 ? "0" + hours : hours} {hours === 1 ? <FormattedMessage id="hour" /> : <FormattedMessage id="hours" />}</p>
      <p>{minutes <10 ? "0" + minutes : minutes} {minutes === 1 ? <FormattedMessage id="minute" /> : <FormattedMessage id="minutes" />}</p>
      <p>{seconds<10 ? "0" + seconds : seconds } {seconds === 1 ? <FormattedMessage id="second" /> : <FormattedMessage id="seconds" />}</p>
    </div>
  )
}