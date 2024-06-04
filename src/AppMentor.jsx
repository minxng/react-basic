import React, { useEffect, useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "민정",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });
  const changeMentorName = (e) => {
    const name = prompt("What's your mentor's name");
    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, name },
    }));
  };
  const changeMentorTitle = () => {
    const title = prompt("What's your mentor's title");
    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, title },
    }));
  };
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={changeMentorName}>멘토 이름 바꾸기</button>
      <button onClick={changeMentorTitle}>멘토 타이틀 바꾸기</button>
    </div>
  );
}
