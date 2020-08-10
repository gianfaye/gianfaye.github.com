import React from "react";

export interface IPaginator {
  pageCount: number;
  index: number;
  pathPrefix: string;
}

interface IGatsbyImage {
  src: string;
  base64?: string;
  srcWebp?: string;
  srcSet?: string;
  srcSetWebp?: string;
  tracedSVG?: string;
}

interface IGatsbyImageFluid extends IGatsbyImage {
  maxHeight: number;
  maxWidth: number;
}

interface IGatsbyImageFixed extends IGatsbyImage {
  height: number;
  width: number;
}

export interface ITopic {
  topicsPage?: boolean;
  featured?: boolean;
  name: string;
  slug: string;
  bio: string;
  color: string;
  avatar: {
    image: IGatsbyImageFluid;
    full: IGatsbyImageFluid;
  };
}
export interface IWork {
  worksPage?: boolean;
  featured?: boolean;
  name: string;
  slug: string;
  bio: string;
  color: string;
  avatar: {
    image: IGatsbyImageFluid;
    full: IGatsbyImageFluid;
  };
}
export interface IClient {
  clientsPage?: boolean;
  featured?: boolean;
  name: string;
  slug: string;
  bio: string;
  color: string;
  avatar: {
    image: IGatsbyImageFluid;
    full: IGatsbyImageFluid;
  };
}

export interface IArticle {
  slug: string;
  topics: ITopic[];
  excerpt: string;
  body: string;
  id: string;
  hero: {
    full: IGatsbyImageFluid;
    preview: IGatsbyImageFluid;
    regular: IGatsbyImageFluid;
    seo: string;
  };
  timeToRead: number;
  date: string;
  secret: boolean;
}

interface IArticleQuery {
  edges: {
    node: IArticle;
  }[];
}

export interface IProject {
  slug: string;
  topics: IWork[];
  excerpt: string;
  body: string;
  id: string;
  hero: {
    full: IGatsbyImageFluid;
    preview: IGatsbyImageFluid;
    regular: IGatsbyImageFluid;
    seo: string;
  };
  timeToRead: number;
  date: string;
  secret: boolean;
}

interface IProjectQuery {
  edges: {
    node: IProject;
  }[];
}

export interface IProgress {
  height: number;
  offset: number;
  title: string;
  mode: string;
  onClose?: () => void;
}

export type Icon = React.FC<{
  fill: string
}>

export type Template = React.FC<{
  pageContext: {
    article: IArticle;
    project: IProject;
    articles: IArticle[];
    projects: IProject[];
    topics: ITopic[];
    clients: IClient[];
    mailchimp: boolean;
    next: IArticle[];
  };
  location: Location;
}>

export type TemplateProject = React.FC<{
  pageContext: {
    article: IArticle;
    project: IProject;
    works: IWork[];
    clients: IClient[];
    mailchimp: boolean;
    next: IProject[];
  };
  location: Location;
}>
