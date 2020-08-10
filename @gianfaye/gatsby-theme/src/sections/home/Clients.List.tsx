import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IClient } from '@types';

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
      <List>
      {clients.map((ap, index) => {
        return (
          <ListItem key={index}  client={ap}/>
        );
      })}
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
          {hasHeroImage ? <Image src={imageSource} /> : <ImagePlaceholder />}
        </ImageContainer>
        <Title dark>
          {client.name}
        </Title>
      </ClientContent>
    </Item>
  );
};

const ClientsListContainer = styled.div`
  margin-top: 30px;
  transition: opacity 0.25s;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  min-width: 100px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
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
