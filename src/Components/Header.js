import React, { useEffect, useState } from "react";

function Header() {
  const [date, setDate] = useState({
    year: "",
    month: "",
    day: "",
    days: "",
  });
  const getDate = () => {
    const dayList = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    setDate({
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      days: dayList[new Date().getDay()],
    });
  };
  useEffect(getDate, []);
  return (
    <div>
      <span>
        {date.year}년 {date.month}월 {date.day}일
      </span>
      <span>{date.days}</span>
    </div>
  );
}

export default Header;
