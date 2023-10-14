import React from 'react';
import { useNavigate , useParams} from 'react-router-dom'
import { Container, Tabs, createStyles, rem } from '@mantine/core';
import '../../css/App.css';

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
      <Container className="menu">
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
    ) 
};

export default Menu;