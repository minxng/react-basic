import React, { useEffect, useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  const changeMentorName = () => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");
    setPerson((data) => ({
      ...data,
      mentors: data.mentors.map((mentor) =>
        mentor.name === prev ? { ...mentor, name: current } : mentor
      ),
    }));
  };
  const addMentor = () => {
    const name = prompt("추가할 멘토 이름을 작성하세요.");
    const title = prompt("추가할 멘토의 타이틀을 작성하세요.");
    setPerson((data) => ({
      ...data,
      mentors: [...data.mentors, { name, title }],
    }));
  };
  const deleteMentor = () => {
    const name = prompt("삭제할 멘토 이름을 작성하세요.");
    setPerson((data) => ({
      ...data,
      mentors: data.mentors.filter((mentor) => mentor.name !== name),
    }));
  };
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={changeMentorName}>멘토 이름 바꾸기</button>
      <button onClick={addMentor}>멘토 추가하기</button>
      <button onClick={deleteMentor}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "민정",
  title: "개발자",
  mentors: [
    {
      id: 1,
      name: "밥",
      title: "시니어개발자",
    },
    {
      id: 2,
      name: "에디",
      title: "시니어개발자",
    },
  ],
};
