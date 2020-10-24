import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';
import Section from "@components/Section";

import mediaqueries from '@styles/media';
import { IClient } from '@types';

import SwiperCore, { Autoplay } from 'swiper';
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

  return (
    <ClientsListContainer>
      <Section narrow>
        <ClientsListWrapper>
          <ClientsListContent>
            <ClientListHeader>
              Worked on projects for
            </ClientListHeader>
            <ClientListText>
              I've worked on and handled several projects for local and international brands and companies.
            </ClientListText>
            <ClientListButton as={Link} to={'/about'}>
              More About Me
            </ClientListButton>
          </ClientsListContent>
          <ClientsListContainerWrapper>
            <List>
              <Swiper
                //spaceBetween={40}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 2,
                  }
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
          </ClientsListContainerWrapper>
        </ClientsListWrapper>
      </Section>
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
  background: #f0f4f6;
  overflow: hidden;
`;

const ClientsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;

  ${mediaqueries.desktop`
    grid-template-columns: 50% 1fr;
  `}
  ${mediaqueries.phablet`
    grid-template-columns: 1fr !important;
    position: relative;
    display: block;
    text-align: center;
  `}
`;

const ClientsListContainerWrapper = styled.div`
  position: relative;
`;

const ClientsListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  ${mediaqueries.phablet`
    margin: 0 auto;
  `}
`;

const List = styled.div`

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
  margin: 0 auto;

  & > div {
    height: 100%;
  }

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
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
    border-radius: 100%;
  `}
`;
