import { useEffect, useState } from "react"

interface Staff {
  name: string;
  phone: string;
  email: string; 
  intro: string;
  records: Array<string>;
  weeklySchedule: weeklySchedule
}

interface weeklySchedule {
  "mon": {}
  "tue": {}
  "wed": {}
  "thu": {}
  "fri": {}
  "sat": {}
  "sun": {}
}

export default function staff() {
  const [staffList, setStaffList] = useState([])
  
  useEffect(()=>{
    getData();
  }, [])
  
  
  const getData = () => {
    const staffListFromApi  = [
      {name: "강사 1", phone: "010-1234-1234", email: "staff1@email.com", intro: "Hello world!", records: [], weeklySchedule: {
        "monday": {
          isVacation: false,
          workHourStart: 900,
          workHourEnd: 1800,
          restStart: 1200,
          restEnd: 1300,
        },
      }},
      {name: "강사 2", phone: "010-2345-2345", email: "staff2@email.com", intro: "강사2입니다", records: [], weeklySchedule: {
        "monday": {
          isVacation: false,
          workHourStart: 900,
          workHourEnd: 1800,
          restStart: 1200,
          restEnd: 1300
        }
      }},
      {name: "강사 3", phone: "010-3456-3456", email: "staff3@email.com", intro: "안녕하세요 반갑습니다.", records: [], weeklySchedule: {
        "monday": {
          isVacation: false,
          workHourStart: 900,
          workHourEnd: 1800,
          restStart: 1200,
          restEnd: 1300
        }
      }},
      {name: "강사 4", phone: "010-4567-4567", email: "staff4@email.com", intro: "강사4", records: [], weeklySchedule: {
        "monday": {
          isVacation: false,
          workHourStart: 900,
          workHourEnd: 1800,
          restStart: 1200,
          restEnd: 1300
        }
      }},
    ]
    setStaffList(staffList => [...staffListFromApi])
  }

  return (
    <>
      <h1>강사</h1>
      {staffList.map((staff: Staff) => (
        <>
        {/* Card */}
          <p key={staff.name + Math.random()}>{staff.name}</p>
          <p key={staff.name + Math.random()}>{staff.phone}</p>
        </>
      ))}
    </>
  )
}