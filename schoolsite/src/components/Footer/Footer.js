import React from "react";
import { Text, Container, ActionIcon, Group, rem, Image, Title } from '@mantine/core';
import img from '../../images/map.png'
import './Footer.css'


const data =
{
  links: [
    { label: 'ГЛАВНАЯ', link: '#' },
    { label: 'КОРПОРАТИВНОЕ ОБУЧЕНИЕ', link: '#' },
    { label: 'АНГЛИЙСКИЙ ДЛЯ ДЕТЕЙ И ПОДРОСТКОВ', link: '#' },
    { label: 'АНГЛИЙСКИЙ ДЛЯ ВЗРОСЛЫХ', link: '#' },
    { label: 'ИНТЕНСИВЫ ДЛЯ ДЕТЕЙ И ПОДРОСТКОВ', link: '#' },
    { label: 'РАЗГОВОРНЫЕ КЛУБЫ', link: '#' }
  ],
}

const FooterLinks = () => {
  const PRIMARY_COL_HEIGHT = rem(300);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  const links = data.links.map((link) => (
    <Title
      order={4}
      className="link"
    >
      {link.label}
    </Title>
  ));

  const review = []

  const address = <Container>
    <Title order={4}>НАШ АДРЕС</Title>
    <Text color="dimmed">Чичеринская ул., 2,<br /> Санкт-Петербург,<br /> 198504</Text>
    <Title order={4}>тел. +7 937 278 47 98</Title>
    <Title order={4}>тел. +7 921 642-79-28</Title>
  </Container>

  return (
    <footer className="footer">
        <div className="groups">{links}</div>
        <div className="address">{address}</div>
        <div className="map">
          <Image 
          src={img} />
        </div>
    </footer>
  );
}


export default FooterLinks;