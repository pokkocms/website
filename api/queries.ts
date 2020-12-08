import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Entries>;
  entry?: Maybe<PokEntry>;
  sync?: Maybe<SyncCollection>;
  taxonomy?: Maybe<PageCollection>;
};


export type QueryEntryArgs = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
};


export type QuerySyncArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<SyncCondition>;
};


export type QueryTaxonomyArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<PagesCondition>;
};

export type Entries = {
  __typename?: 'Entries';
  tiles?: Maybe<Tiles>;
  modularPage?: Maybe<ModularPage>;
  featureTile?: Maybe<FeatureTile>;
  iconTile?: Maybe<IconTile>;
  iconTiles?: Maybe<IconTiles>;
  section?: Maybe<Section>;
  hero?: Maybe<Hero>;
  featureTiles?: Maybe<FeatureTiles>;
  resourceTiles?: Maybe<ResourceTiles>;
  tile?: Maybe<Tile>;
  resourceTile?: Maybe<ResourceTile>;
  link?: Maybe<Link>;
  allTiles?: Maybe<TilesCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
  allFeatureTile?: Maybe<FeatureTileCollection>;
  allIconTile?: Maybe<IconTileCollection>;
  allIconTiles?: Maybe<IconTilesCollection>;
  allSection?: Maybe<SectionCollection>;
  allHero?: Maybe<HeroCollection>;
  allFeatureTiles?: Maybe<FeatureTilesCollection>;
  allResourceTiles?: Maybe<ResourceTilesCollection>;
  allTile?: Maybe<TileCollection>;
  allResourceTile?: Maybe<ResourceTileCollection>;
  allLink?: Maybe<LinkCollection>;
};


export type EntriesTilesArgs = {
  id: Scalars['String'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String'];
};


export type EntriesFeatureTileArgs = {
  id: Scalars['String'];
};


export type EntriesIconTileArgs = {
  id: Scalars['String'];
};


export type EntriesIconTilesArgs = {
  id: Scalars['String'];
};


export type EntriesSectionArgs = {
  id: Scalars['String'];
};


export type EntriesHeroArgs = {
  id: Scalars['String'];
};


export type EntriesFeatureTilesArgs = {
  id: Scalars['String'];
};


export type EntriesResourceTilesArgs = {
  id: Scalars['String'];
};


export type EntriesTileArgs = {
  id: Scalars['String'];
};


export type EntriesResourceTileArgs = {
  id: Scalars['String'];
};


export type EntriesLinkArgs = {
  id: Scalars['String'];
};


export type EntriesAllTilesArgs = {
  condition?: Maybe<TilesFilter>;
  orderBy?: Maybe<TilesOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllModularPageArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllFeatureTileArgs = {
  condition?: Maybe<FeatureTileFilter>;
  orderBy?: Maybe<FeatureTileOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllIconTileArgs = {
  condition?: Maybe<IconTileFilter>;
  orderBy?: Maybe<IconTileOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllIconTilesArgs = {
  condition?: Maybe<IconTilesFilter>;
  orderBy?: Maybe<IconTilesOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllSectionArgs = {
  condition?: Maybe<SectionFilter>;
  orderBy?: Maybe<SectionOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHeroArgs = {
  condition?: Maybe<HeroFilter>;
  orderBy?: Maybe<HeroOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllFeatureTilesArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllResourceTilesArgs = {
  condition?: Maybe<ResourceTilesFilter>;
  orderBy?: Maybe<ResourceTilesOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTileArgs = {
  condition?: Maybe<TileFilter>;
  orderBy?: Maybe<TileOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllResourceTileArgs = {
  condition?: Maybe<ResourceTileFilter>;
  orderBy?: Maybe<ResourceTileOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllLinkArgs = {
  condition?: Maybe<LinkFilter>;
  orderBy?: Maybe<LinkOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type Tiles = PokEntry & PokValue & ISection & {
  __typename?: 'Tiles';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Array<Maybe<PokValue>>>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type Pokko = {
  __typename?: 'Pokko';
  id: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  created: Scalars['String'];
  modified: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type ISection = {
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ModularPage = PokEntry & PokValue & {
  __typename?: 'ModularPage';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Array<Maybe<PokValue>>>;
};

export type FeatureTile = PokEntry & PokValue & ITile & IIconTile & {
  __typename?: 'FeatureTile';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  icon?: Maybe<PokMedia>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ITile = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type IIconTile = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  icon?: Maybe<PokMedia>;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  id: Scalars['String'];
  url: Scalars['String'];
};


export type PokMediaUrlArgs = {
  process?: Maybe<PokMediaProcess>;
};

export type PokMediaProcess = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  fit?: Maybe<PokMediaFit>;
  position?: Maybe<PokMediaPosition>;
};

export enum PokMediaFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum PokMediaPosition {
  Centre = 'CENTRE',
  Top = 'TOP',
  RightTop = 'RIGHT_TOP',
  Right = 'RIGHT',
  RightBottom = 'RIGHT_BOTTOM',
  Bottom = 'BOTTOM',
  LeftBottom = 'LEFT_BOTTOM',
  Left = 'LEFT',
  LeftTop = 'LEFT_TOP'
}

export type IconTile = PokEntry & PokValue & ITile & {
  __typename?: 'IconTile';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  icon?: Maybe<PokMedia>;
};

export type IconTiles = PokEntry & PokValue & ISection & {
  __typename?: 'IconTiles';
  id: Scalars['String'];
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<PokValue>>>;
  layout?: Maybe<Scalars['String']>;
};

export type Section = PokEntry & PokValue & {
  __typename?: 'Section';
  id: Scalars['String'];
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Hero = PokEntry & PokValue & {
  __typename?: 'Hero';
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
  link?: Maybe<PokValue>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type FeatureTiles = PokEntry & PokValue & {
  __typename?: 'FeatureTiles';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Array<Maybe<PokValue>>>;
};

export type ResourceTiles = PokEntry & PokValue & ISection & {
  __typename?: 'ResourceTiles';
  id: Scalars['String'];
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<PokValue>>>;
};

export type Tile = PokEntry & PokValue & {
  __typename?: 'Tile';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type ResourceTile = PokEntry & PokValue & ITile & {
  __typename?: 'ResourceTile';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  link?: Maybe<PokValue>;
  body?: Maybe<Scalars['String']>;
};

export type Link = PokEntry & PokValue & {
  __typename?: 'Link';
  id: Scalars['String'];
  pokko: Pokko;
  target?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type TilesCollection = {
  __typename?: 'TilesCollection';
  nodes: Array<Maybe<Tiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
};

export type TilesFilter = {
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum TilesOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<ModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeatureTileCollection = {
  __typename?: 'FeatureTileCollection';
  nodes: Array<Maybe<FeatureTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeatureTileFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
  /** Filter on the Features field */
  features?: Maybe<Scalars['String']>;
};

export enum FeatureTileOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  FeaturesAsc = 'FEATURES_ASC',
  FeaturesDesc = 'FEATURES_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type IconTileCollection = {
  __typename?: 'IconTileCollection';
  nodes: Array<Maybe<IconTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IconTileFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum IconTileOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type IconTilesCollection = {
  __typename?: 'IconTilesCollection';
  nodes: Array<Maybe<IconTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IconTilesFilter = {
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Layout field */
  layout?: Maybe<Scalars['String']>;
};

export enum IconTilesOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  LayoutAsc = 'LAYOUT_ASC',
  LayoutDesc = 'LAYOUT_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type SectionCollection = {
  __typename?: 'SectionCollection';
  nodes: Array<Maybe<Section>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SectionFilter = {
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum SectionOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type HeroCollection = {
  __typename?: 'HeroCollection';
  nodes: Array<Maybe<Hero>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HeroFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum HeroOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type FeatureTilesCollection = {
  __typename?: 'FeatureTilesCollection';
  nodes: Array<Maybe<FeatureTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTilesCollection = {
  __typename?: 'ResourceTilesCollection';
  nodes: Array<Maybe<ResourceTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTilesFilter = {
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum ResourceTilesOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type TileCollection = {
  __typename?: 'TileCollection';
  nodes: Array<Maybe<Tile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TileFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum TileOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ResourceTileCollection = {
  __typename?: 'ResourceTileCollection';
  nodes: Array<Maybe<ResourceTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTileFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum ResourceTileOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type LinkCollection = {
  __typename?: 'LinkCollection';
  nodes: Array<Maybe<Link>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LinkFilter = {
  /** Filter on the Target field */
  target?: Maybe<Scalars['String']>;
  /** Filter on the Text field */
  text?: Maybe<Scalars['String']>;
};

export enum LinkOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TargetAsc = 'TARGET_ASC',
  TargetDesc = 'TARGET_DESC',
  TextAsc = 'TEXT_ASC',
  TextDesc = 'TEXT_DESC'
}

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Sync = {
  __typename?: 'Sync';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
};


export type SyncCondition = {
  after?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Page = {
  __typename?: 'Page';
  fullPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  entry?: Maybe<PokEntry>;
  type?: Maybe<Scalars['String']>;
  entryId?: Maybe<Scalars['String']>;
};

export type PagesCondition = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathExact?: Maybe<Scalars['Boolean']>;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = (
  { __typename?: 'Query' }
  & { entry?: Maybe<{ __typename?: 'Tiles' } | (
    { __typename?: 'ModularPage' }
    & { body?: Maybe<Array<Maybe<(
      { __typename: 'Tiles' }
      & HomeModule_Tiles_Fragment
    ) | (
      { __typename: 'ModularPage' }
      & HomeModule_ModularPage_Fragment
    ) | (
      { __typename: 'FeatureTile' }
      & HomeModule_FeatureTile_Fragment
    ) | (
      { __typename: 'IconTile' }
      & HomeModule_IconTile_Fragment
    ) | (
      { __typename: 'IconTiles' }
      & HomeModule_IconTiles_Fragment
    ) | (
      { __typename: 'Section' }
      & HomeModule_Section_Fragment
    ) | (
      { __typename: 'Hero' }
      & HomeModule_Hero_Fragment
    ) | (
      { __typename: 'FeatureTiles' }
      & HomeModule_FeatureTiles_Fragment
    ) | (
      { __typename: 'ResourceTiles' }
      & HomeModule_ResourceTiles_Fragment
    ) | (
      { __typename: 'Tile' }
      & HomeModule_Tile_Fragment
    ) | (
      { __typename: 'ResourceTile' }
      & HomeModule_ResourceTile_Fragment
    ) | (
      { __typename: 'Link' }
      & HomeModule_Link_Fragment
    )>>> }
  ) | { __typename?: 'FeatureTile' } | { __typename?: 'IconTile' } | { __typename?: 'IconTiles' } | { __typename?: 'Section' } | { __typename?: 'Hero' } | { __typename?: 'FeatureTiles' } | { __typename?: 'ResourceTiles' } | { __typename?: 'Tile' } | { __typename?: 'ResourceTile' } | { __typename?: 'Link' }> }
);

type HomeModule_Tiles_Fragment = { __typename?: 'Tiles' };

type HomeModule_ModularPage_Fragment = { __typename?: 'ModularPage' };

type HomeModule_FeatureTile_Fragment = { __typename?: 'FeatureTile' };

type HomeModule_IconTile_Fragment = { __typename?: 'IconTile' };

type HomeModule_IconTiles_Fragment = (
  { __typename?: 'IconTiles' }
  & IconTilesModuleFragment
);

type HomeModule_Section_Fragment = { __typename?: 'Section' };

type HomeModule_Hero_Fragment = (
  { __typename?: 'Hero' }
  & HeroModuleFragment
);

type HomeModule_FeatureTiles_Fragment = (
  { __typename?: 'FeatureTiles' }
  & FeatureTilesModuleFragment
);

type HomeModule_ResourceTiles_Fragment = (
  { __typename?: 'ResourceTiles' }
  & ResourceTileModuleFragment
);

type HomeModule_Tile_Fragment = { __typename?: 'Tile' };

type HomeModule_ResourceTile_Fragment = { __typename?: 'ResourceTile' };

type HomeModule_Link_Fragment = { __typename?: 'Link' };

export type HomeModuleFragment = HomeModule_Tiles_Fragment | HomeModule_ModularPage_Fragment | HomeModule_FeatureTile_Fragment | HomeModule_IconTile_Fragment | HomeModule_IconTiles_Fragment | HomeModule_Section_Fragment | HomeModule_Hero_Fragment | HomeModule_FeatureTiles_Fragment | HomeModule_ResourceTiles_Fragment | HomeModule_Tile_Fragment | HomeModule_ResourceTile_Fragment | HomeModule_Link_Fragment;

export type HeroModuleFragment = (
  { __typename?: 'Hero' }
  & Pick<Hero, 'title'>
  & { heroBody: Hero['body'] }
  & { link?: Maybe<{ __typename?: 'Tiles' } | { __typename?: 'ModularPage' } | { __typename?: 'FeatureTile' } | { __typename?: 'IconTile' } | { __typename?: 'IconTiles' } | { __typename?: 'Section' } | { __typename?: 'Hero' } | { __typename?: 'FeatureTiles' } | { __typename?: 'ResourceTiles' } | { __typename?: 'Tile' } | { __typename?: 'ResourceTile' } | (
    { __typename?: 'Link' }
    & Pick<Link, 'target' | 'text'>
  )>, image?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )> }
);

export type IconTilesModuleFragment = (
  { __typename?: 'IconTiles' }
  & Pick<IconTiles, 'layout' | 'title' | 'summary'>
  & { iconTileBody?: Maybe<Array<Maybe<{ __typename?: 'Tiles' } | { __typename?: 'ModularPage' } | { __typename?: 'FeatureTile' } | (
    { __typename?: 'IconTile' }
    & Pick<IconTile, 'title' | 'body'>
    & { icon?: Maybe<(
      { __typename?: 'PokMedia' }
      & Pick<PokMedia, 'url'>
    )> }
  ) | { __typename?: 'IconTiles' } | { __typename?: 'Section' } | { __typename?: 'Hero' } | { __typename?: 'FeatureTiles' } | { __typename?: 'ResourceTiles' } | { __typename?: 'Tile' } | { __typename?: 'ResourceTile' } | { __typename?: 'Link' }>>> }
);

export type FeatureTilesModuleFragment = (
  { __typename?: 'FeatureTiles' }
  & { featureTilesBody?: Maybe<Array<Maybe<{ __typename?: 'Tiles' } | { __typename?: 'ModularPage' } | (
    { __typename?: 'FeatureTile' }
    & Pick<FeatureTile, 'title' | 'body' | 'features'>
    & { icon?: Maybe<(
      { __typename?: 'PokMedia' }
      & Pick<PokMedia, 'url'>
    )> }
  ) | { __typename?: 'IconTile' } | { __typename?: 'IconTiles' } | { __typename?: 'Section' } | { __typename?: 'Hero' } | { __typename?: 'FeatureTiles' } | { __typename?: 'ResourceTiles' } | { __typename?: 'Tile' } | { __typename?: 'ResourceTile' } | { __typename?: 'Link' }>>> }
);

export type ResourceTileModuleFragment = (
  { __typename?: 'ResourceTiles' }
  & Pick<ResourceTiles, 'title' | 'summary'>
  & { resourceTilesBody?: Maybe<Array<Maybe<{ __typename?: 'Tiles' } | { __typename?: 'ModularPage' } | { __typename?: 'FeatureTile' } | { __typename?: 'IconTile' } | { __typename?: 'IconTiles' } | { __typename?: 'Section' } | { __typename?: 'Hero' } | { __typename?: 'FeatureTiles' } | { __typename?: 'ResourceTiles' } | { __typename?: 'Tile' } | (
    { __typename?: 'ResourceTile' }
    & Pick<ResourceTile, 'title' | 'body'>
    & { link?: Maybe<{ __typename?: 'Tiles' } | { __typename?: 'ModularPage' } | { __typename?: 'FeatureTile' } | { __typename?: 'IconTile' } | { __typename?: 'IconTiles' } | { __typename?: 'Section' } | { __typename?: 'Hero' } | { __typename?: 'FeatureTiles' } | { __typename?: 'ResourceTiles' } | { __typename?: 'Tile' } | { __typename?: 'ResourceTile' } | (
      { __typename?: 'Link' }
      & Pick<Link, 'text' | 'target'>
    )> }
  ) | { __typename?: 'Link' }>>> }
);

export const HeroModuleFragmentDoc = gql`
    fragment HeroModule on Hero {
  title
  heroBody: body
  link {
    ... on Link {
      target
      text
    }
  }
  image {
    url
  }
}
    `;
export const IconTilesModuleFragmentDoc = gql`
    fragment IconTilesModule on IconTiles {
  layout
  title
  summary
  iconTileBody: body {
    ... on IconTile {
      title
      body
      icon {
        url
      }
    }
  }
}
    `;
export const FeatureTilesModuleFragmentDoc = gql`
    fragment FeatureTilesModule on FeatureTiles {
  featureTilesBody: body {
    ... on FeatureTile {
      title
      body
      features
      icon {
        url
      }
    }
  }
}
    `;
export const ResourceTileModuleFragmentDoc = gql`
    fragment ResourceTileModule on ResourceTiles {
  title
  summary
  resourceTilesBody: body {
    ... on ResourceTile {
      title
      body
      link {
        ... on Link {
          text
          target
        }
      }
    }
  }
}
    `;
export const HomeModuleFragmentDoc = gql`
    fragment HomeModule on PokValue {
  ...HeroModule
  ...IconTilesModule
  ...FeatureTilesModule
  ...ResourceTileModule
}
    ${HeroModuleFragmentDoc}
${IconTilesModuleFragmentDoc}
${FeatureTilesModuleFragmentDoc}
${ResourceTileModuleFragmentDoc}`;
export const GetHomeDocument = gql`
    query GetHome {
  entry(path: ["website", "home"]) {
    ... on ModularPage {
      body {
        __typename
        ...HomeModule
      }
    }
  }
}
    ${HomeModuleFragmentDoc}`;

/**
 * __useGetHomeQuery__
 *
 * To run a query within a React component, call `useGetHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeQuery(baseOptions?: Apollo.QueryHookOptions<GetHomeQuery, GetHomeQueryVariables>) {
        return Apollo.useQuery<GetHomeQuery, GetHomeQueryVariables>(GetHomeDocument, baseOptions);
      }
export function useGetHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomeQuery, GetHomeQueryVariables>) {
          return Apollo.useLazyQuery<GetHomeQuery, GetHomeQueryVariables>(GetHomeDocument, baseOptions);
        }
export type GetHomeQueryHookResult = ReturnType<typeof useGetHomeQuery>;
export type GetHomeLazyQueryHookResult = ReturnType<typeof useGetHomeLazyQuery>;
export type GetHomeQueryResult = Apollo.QueryResult<GetHomeQuery, GetHomeQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "PokEntry": [
      "Tiles",
      "ModularPage",
      "FeatureTile",
      "IconTile",
      "IconTiles",
      "Section",
      "Hero",
      "FeatureTiles",
      "ResourceTiles",
      "Tile",
      "ResourceTile",
      "Link"
    ],
    "PokValue": [
      "Tiles",
      "ModularPage",
      "FeatureTile",
      "IconTile",
      "IconTiles",
      "Section",
      "Hero",
      "FeatureTiles",
      "ResourceTiles",
      "Tile",
      "ResourceTile",
      "Link"
    ],
    "ISection": [
      "Tiles",
      "IconTiles",
      "ResourceTiles"
    ],
    "ITile": [
      "FeatureTile",
      "IconTile",
      "ResourceTile"
    ],
    "IIconTile": [
      "FeatureTile"
    ]
  }
};
      export default result;
    