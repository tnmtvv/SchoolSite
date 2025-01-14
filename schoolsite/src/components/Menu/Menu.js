import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Tabs, createStyles, rem, Image, Anchor } from '@mantine/core';

import '../../css/App.css';
import logo from '../../images/SmartSchool_logo_TrBg.png';
import './Menu.css'

const Menu = () => {
  const useStyles = createStyles((theme) => ({
    mainLink: {
      textTransform: 'uppercase',
      fontSize: rem(18),
      color: theme.colors.gray[6],
      padding: `${rem(7)} ${theme.spacing.sm}`,
      fontWeight: 700,
      borderBottom: `${rem(2)} solid transparent`,
      transition: 'border-color 100ms ease, color 100ms ease',

      '&:hover': {
        color: theme.black,
        textDecoration: 'none',
      },
    }
  }))
  const navigate = useNavigate();
  function navigateTo(url) {
    navigate(url)
  }
  const { classes } = useStyles();
  const { tabValue } = useParams();
  return (
    <div className='header'>
      <div className='logo'>
        <Image
          radius="md"
          src={logo}
        />
      </div>
      <Container className='tabs'>
        <Tabs color="red" value={tabValue} onTabChange={(value) => navigateTo(`/${value}`)}>
          <Tabs.List>
            <Tabs.Tab className={classes.mainLink} value="Home">Главная</Tabs.Tab>
            <Tabs.Tab className={classes.mainLink} value="Children">Детям</Tabs.Tab>
            <Tabs.Tab className={classes.mainLink} value="Adults">Взрослым</Tabs.Tab>
            <Tabs.Tab className={classes.mainLink} value="Languages">Языки</Tabs.Tab>
            <Tabs.Tab className={classes.mainLink} value="ConversationClub">Разговорный клуб</Tabs.Tab>
            <Tabs.Tab className={classes.mainLink} value="Exams">Экзамены</Tabs.Tab>
            <Tabs.Tab className={classes.mainLink} value="Teachers">Педагоги</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Container>

    </div>
  )
};

export default Menu;