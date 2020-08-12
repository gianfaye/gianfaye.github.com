import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IClient } from '@types';

import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.scss';
SwiperCore.use([Autoplay]);

interface ClientsListProps {
  clients: IClient[];
  alwaysShowAllDetails?: boolean;
}

interface ClientsListItemProps {
  client: IClient;
  narrow?: boolean;
}

const ClientsList: React.FC<ClientsListProps> = ({ clients }) => {
  if (!clients) return null;
  console.log('ClientsList clients', clients);

  return (
    <ClientsListContainer>
      <ClientsListContent>
        <ClientListHeader>
          Worked on projects for:
        </ClientListHeader>
        <ClientListText>
          I've worked on and handled several projects for local and international brands and companies.
        </ClientListText>
        <ClientListButton>
          Explore Projects
        </ClientListButton>
      </ClientsListContent>
      <List>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          breakpoints={{
            1400: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {clients.map((ap, index) => {
            return (
              <SwiperSlide><ListItem key={index}  client={ap}/></SwiperSlide>
            );
          })}
        </Swiper>
      </List>
    </ClientsListContainer>
  );
};

export default ClientsList;

const ListItem: React.FC<ClientsListItemProps> = ({ client }) => {
  if (!client) return null;

  const imageSource = client.avatar.medium;
  const hasHeroImage =
    imageSource &&
    Object.keys(imageSource).length !== 0 &&
    imageSource.constructor === Object;

  return (
    <Item>
      <ClientContent>
        <ImageContainer>
          {hasHeroImage ? <Image src={imageSource} alt={client.name} /> : <ImagePlaceholder />}
        </ImageContainer>
      </ClientContent>
    </Item>
  );
};

const ClientsListContainer = styled.div`
  margin: 0 -40px;
  padding: 60px 0;
  transition: opacity 0.25s;
  display: grid;
  grid-template-columns: 500px 1fr;
  background: #f0f4f6;

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
    padding: 60px;
  `}
`;

const ClientsListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: calc((100vw - 1220px) / 2 + 40px);

  ${mediaqueries.tablet`
    padding-left: 0;
  `}
`;

const ClientListHeader = styled.h3`
  font-size: 32px;
  line-height: 0.9;
  margin-bottom: 20px;
`;

const ClientListText = styled.p`
  font-size: 20px;
  font-family: ${p => p.theme.fonts.italic};
  padding-right: 20px;
  margin-bottom: 20px;
  font-style: italic;
  opacity: 0.8;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.6px;
`;

const ClientListButton = styled.a`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
  font-family: ${p => p.theme.fonts.sansSerif};
  background: ${p => p.theme.colors.projectColor};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  box-sizing: border-box;
  transition: background-color .15s ease,color .15s ease,border .15s ease;
  padding: 12px 15px;
  width: 200px;
  text-align: center;

  &:hover{
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.background};
  }
`;

const List = styled.div`
  display: flex;
  width: calc(100vw - 630px);

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const Item = styled.div`
  min-width: 100px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 230px;
  width: 230px;
  border-radius: 100%;
  overflow: hidden;
  transition: transform 0.3s var(--ease-out-quad),
  box-shadow 0.3s var(--ease-out-quad);

  & > div {
    height: 100%;
  }

  ${mediaqueries.tablet`
    height: 200px;
    margin-bottom: 35px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  `}
`;

const Title = styled(Headings.h2)`
  font-size: 26px;
  font-weight: 400;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 25px;
  //transition: color 0.3s ease-in-out;
  background-size: 0 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  -webkit-transition: background-size .8s ease;
  transition: background-size .8s ease;
  background-image: -webkit-gradient(linear,left top,left bottom,color-stop(65%,transparent),color-stop(10%,#37FE13));
  background-image: linear-gradient(180deg,transparent 65%,#37FE13 0);

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
    padding: 0;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`;

const ClientContent = styled.div`
  padding: 50px 3px;
  z-index: 600;
  display: block;
  position: relative;

  ${mediaqueries.tablet`
    margin: 0 auto;
    width: 100%;
  `}
`;
