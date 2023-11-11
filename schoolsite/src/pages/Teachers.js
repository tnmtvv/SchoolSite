import React from "react";
import TeacherInfo from "../components/TeacherInfo/TeacherInfo";
import { teachers } from '../data/techers'

const Teachers = () => {
    return (
        <div>
            {teachers.map(teacher =>
                <TeacherInfo teacher={teacher} />
            )
            }

        </div>
    )
}

export default Teachers;