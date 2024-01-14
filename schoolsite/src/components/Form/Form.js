import React from 'react';
import { TextInput, Title, Button, Group, Box } from '@mantine/core';
import { Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import './Form.css'

const Form = () => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment: '',
        },

        validate: {
            name: (value) => (value.length < 5 ? 'Поле должно содержать хотя бы 5 символов' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неккоректная почта'),
            phone: (value) => (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value) ? null : 'Неккоректный номер')
        },
    });

    return (
        <Box className='form' maw={460} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Title order={2} color='white'>Запись на пробное занятие</Title>
                <TextInput
                    className='text-input'
                    withAsterisk
                    radius="xl"
                    placeholder="ФИО"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    className='text-input'
                    withAsterisk
                    radius="xl"
                    placeholder="Адрес электронной почты"
                    {...form.getInputProps('email')}
                />

                <TextInput
                    withAsterisk
                    className='text-input'
                    radius="xl"
                    placeholder="Контактный телефон"
                    {...form.getInputProps('phone')}
                />

                <Textarea
                    radius="lg"
                    className='text-input'
                    withAsterisk
                    placeholder="Комментарий"
                    {...form.getInputProps('comment')}
                />

                <Group className='form-button' mt="md">
                    <Button
                        size='md'
                        radius="md"
                        className='menu-button' type="submit">Отправить</Button>
                </Group>
            </form>
        </Box>
    )
}

export default Form