import React from 'react';
import { Avatar, Text, Title } from '@mantine/core';
import './TeacherInfo.css';

const TeacherInfo = ({ teacher }) => {
  return (
    <div className="teacher-info">
      <Avatar
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        size={448}
      />
      <div className="teacher-description">
        <Title order={1} className="teacher-name">{teacher.name}</Title>
        <Text size="lg" fw={800} c="dimmed" lh={5} style={{ textAlign: "center" }}>
          {teacher.job}
        </Text>
        <Text fs={20} size="lg" className="data">
          <b>Преподавательский стаж: </b>{teacher.expirience}.<br />
          <b>Образование: </b>{teacher.education}<br />
          <b>Достижения и квалификация: </b>{teacher.achievements}
        </Text>
      </div>
    </div>
  );
}

export default TeacherInfo; 