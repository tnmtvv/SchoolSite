import React from "react";
import { Text, Container, ActionIcon, Group, rem, Image, Title } from '@mantine/core';
import img from '../../images/map.png'
import google from '../../images/Google.png'
import yandex from '../../images/Yandex.png'
import googleImg from '../../images/Google_logo_2015.png'
import yandexImg from '../../images/yandex-logo.png'
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
      <div className="footer-left">

        <div className="groups">{links}</div>
        <div className="adress-map-mobile">
          <div className="address-mobile">{address}</div>
          <div className="map-mobile">
            <Image className="image"
              src={img} />
          </div>
        </div>
        <div className="address-desktop">{address}</div>
        <div className="map-reviews">
          <div className="google-logo">
            <Image
              src={googleImg} />
          </div>
          <div className="google">
            <Image
              src={google} />
          </div>
          <div className="yandex-logo">
            <Image
              src={yandexImg} />
          </div>
          <div className="yandex">
            <Image
              src={yandex} />
          </div>

        </div>
        <div className="map-desktop">
          <Image className="image"
            src={img} />
        </div>
      </div>

    </footer>
  );
}


export default FooterLinks;