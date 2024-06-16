import React from "react";
import axios from "axios"

const handleFormSubmit = async (formData) => {
    await axios.post('/submit_form', { formData }).then(response => {
        console.log(formData)
        console.log(response)
    }).catch(error => {
        console.error('Ошибка запроса:', error);
    })
}

export default handleFormSubmit