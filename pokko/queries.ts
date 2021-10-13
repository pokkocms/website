import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type Author = IAuthor & PokEntry & {
  __typename?: 'Author';
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  name?: Maybe<Scalars['String']>;
  pokko: Pokko;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  nodes: Array<Maybe<IAuthor>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AuthorCondition = {
  name?: Maybe<Scalars['String']>;
};

export type AuthorFilter = {
  and?: Maybe<Array<AuthorFilter>>;
  id?: Maybe<ScalarIdFilter>;
  name?: Maybe<ScalarStringFilter>;
  or?: Maybe<Array<AuthorFilter>>;
};

export enum AuthorOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type BlogPost = IBlogPost & IContentPage & IMetadata & IModularPage & PokEntry & {
  __typename?: 'BlogPost';
  alias: Scalars['String'];
  alias2?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Author>>>;
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  date?: Maybe<Scalars['String']>;
  estimatedReadTime?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title2?: Maybe<Scalars['String']>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  nodes: Array<Maybe<IBlogPost>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlogPostCondition = {
  alias?: Maybe<Scalars['String']>;
  alias2?: Maybe<Scalars['String']>;
  authors?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  estimatedReadTime?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title2?: Maybe<Scalars['String']>;
};

export type BlogPostFilter = {
  alias?: Maybe<ScalarStringFilter>;
  alias2?: Maybe<ScalarStringFilter>;
  and?: Maybe<Array<BlogPostFilter>>;
  authors?: Maybe<ScalarIdFilterMulti>;
  date?: Maybe<ScalarDateFilter>;
  estimatedReadTime?: Maybe<ScalarNumberFilter>;
  id?: Maybe<ScalarIdFilter>;
  metaDescription?: Maybe<ScalarStringFilter>;
  metaTitle?: Maybe<ScalarStringFilter>;
  or?: Maybe<Array<BlogPostFilter>>;
  summary?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
  title2?: Maybe<ScalarStringFilter>;
};

export enum BlogPostOrderBy {
  Alias2Asc = 'ALIAS2_ASC',
  Alias2Desc = 'ALIAS2_DESC',
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  EstimatedReadTimeAsc = 'ESTIMATED_READ_TIME_ASC',
  EstimatedReadTimeDesc = 'ESTIMATED_READ_TIME_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  Title2Asc = 'TITLE2_ASC',
  Title2Desc = 'TITLE2_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ContentPage = IContentPage & IMetadata & IModularPage & PokEntry & {
  __typename?: 'ContentPage';
  alias: Scalars['String'];
  alias2?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  estimatedReadTime?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title2?: Maybe<Scalars['String']>;
};

export type ContentPageCollection = {
  __typename?: 'ContentPageCollection';
  nodes: Array<Maybe<IContentPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentPageCondition = {
  alias?: Maybe<Scalars['String']>;
  alias2?: Maybe<Scalars['String']>;
  estimatedReadTime?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title2?: Maybe<Scalars['String']>;
};

export type ContentPageFilter = {
  alias?: Maybe<ScalarStringFilter>;
  alias2?: Maybe<ScalarStringFilter>;
  and?: Maybe<Array<ContentPageFilter>>;
  estimatedReadTime?: Maybe<ScalarNumberFilter>;
  id?: Maybe<ScalarIdFilter>;
  metaDescription?: Maybe<ScalarStringFilter>;
  metaTitle?: Maybe<ScalarStringFilter>;
  or?: Maybe<Array<ContentPageFilter>>;
  summary?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
  title2?: Maybe<ScalarStringFilter>;
};

export enum ContentPageOrderBy {
  Alias2Asc = 'ALIAS2_ASC',
  Alias2Desc = 'ALIAS2_DESC',
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  EstimatedReadTimeAsc = 'ESTIMATED_READ_TIME_ASC',
  EstimatedReadTimeDesc = 'ESTIMATED_READ_TIME_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  Title2Asc = 'TITLE2_ASC',
  Title2Desc = 'TITLE2_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type EarlyAccessForm = IEarlyAccessForm & PokValue & {
  __typename?: 'EarlyAccessForm';
  id: Scalars['String'];
  link?: Maybe<Link>;
  style?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EarlyAccessFormCollection = {
  __typename?: 'EarlyAccessFormCollection';
  nodes: Array<Maybe<IEarlyAccessForm>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EarlyAccessFormCondition = {
  style?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EarlyAccessFormFilter = {
  and?: Maybe<Array<EarlyAccessFormFilter>>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<EarlyAccessFormFilter>>;
  style?: Maybe<ScalarStringFilter>;
  summary?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
};

export enum EarlyAccessFormOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  StyleAsc = 'STYLE_ASC',
  StyleDesc = 'STYLE_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type Entries = {
  __typename?: 'Entries';
  allAuthor?: Maybe<AuthorCollection>;
  allBlogPost?: Maybe<BlogPostCollection>;
  allContentPage?: Maybe<ContentPageCollection>;
  allEarlyAccessForm?: Maybe<EarlyAccessFormCollection>;
  allFeatureTile?: Maybe<FeatureTileCollection>;
  allFeatureTiles?: Maybe<FeatureTilesCollection>;
  allHero?: Maybe<HeroCollection>;
  allIconTile?: Maybe<IconTileCollection>;
  allIconTiles?: Maybe<IconTilesCollection>;
  allImage?: Maybe<ImageCollection>;
  allLink?: Maybe<LinkCollection>;
  allMetadata?: Maybe<MetadataCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
  allResourceTile?: Maybe<ResourceTileCollection>;
  allResourceTiles?: Maybe<ResourceTilesCollection>;
  allRichText?: Maybe<RichTextCollection>;
  allSection?: Maybe<SectionCollection>;
  allTile?: Maybe<TileCollection>;
  allTiles?: Maybe<TilesCollection>;
  author?: Maybe<Author>;
  blogPost?: Maybe<BlogPost>;
  contentPage?: Maybe<ContentPage>;
  earlyAccessForm?: Maybe<EarlyAccessForm>;
  featureTile?: Maybe<FeatureTile>;
  featureTiles?: Maybe<FeatureTiles>;
  hero?: Maybe<Hero>;
  iconTile?: Maybe<IconTile>;
  iconTiles?: Maybe<IconTiles>;
  image?: Maybe<Image>;
  link?: Maybe<Link>;
  metadata?: Maybe<Metadata>;
  modularPage?: Maybe<ModularPage>;
  resourceTile?: Maybe<ResourceTile>;
  resourceTiles?: Maybe<ResourceTiles>;
  richText?: Maybe<RichText>;
  section?: Maybe<Section>;
  tile?: Maybe<Tile>;
  tiles?: Maybe<Tiles>;
};


export type EntriesAllAuthorArgs = {
  filter?: Maybe<AuthorFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<AuthorOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllBlogPostArgs = {
  filter?: Maybe<BlogPostFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<BlogPostOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllContentPageArgs = {
  filter?: Maybe<ContentPageFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<ContentPageOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllEarlyAccessFormArgs = {
  filter?: Maybe<EarlyAccessFormFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<EarlyAccessFormOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllFeatureTileArgs = {
  filter?: Maybe<FeatureTileFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<FeatureTileOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllFeatureTilesArgs = {
  inherit?: Scalars['Boolean'];
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHeroArgs = {
  filter?: Maybe<HeroFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<HeroOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllIconTileArgs = {
  filter?: Maybe<IconTileFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<IconTileOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllIconTilesArgs = {
  filter?: Maybe<IconTilesFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<IconTilesOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllImageArgs = {
  inherit?: Scalars['Boolean'];
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllLinkArgs = {
  filter?: Maybe<LinkFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<LinkOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllMetadataArgs = {
  filter?: Maybe<MetadataFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<MetadataOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllModularPageArgs = {
  filter?: Maybe<ModularPageFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<ModularPageOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllResourceTileArgs = {
  filter?: Maybe<ResourceTileFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<ResourceTileOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllResourceTilesArgs = {
  filter?: Maybe<ResourceTilesFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<ResourceTilesOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllRichTextArgs = {
  filter?: Maybe<RichTextFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<RichTextOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllSectionArgs = {
  filter?: Maybe<SectionFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<SectionOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTileArgs = {
  filter?: Maybe<TileFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<TileOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTilesArgs = {
  filter?: Maybe<TilesFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: Maybe<Array<Maybe<TilesOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAuthorArgs = {
  id: Scalars['String'];
};


export type EntriesBlogPostArgs = {
  id: Scalars['String'];
};


export type EntriesContentPageArgs = {
  id: Scalars['String'];
};


export type EntriesEarlyAccessFormArgs = {
  id: Scalars['String'];
};


export type EntriesFeatureTileArgs = {
  id: Scalars['String'];
};


export type EntriesFeatureTilesArgs = {
  id: Scalars['String'];
};


export type EntriesHeroArgs = {
  id: Scalars['String'];
};


export type EntriesIconTileArgs = {
  id: Scalars['String'];
};


export type EntriesIconTilesArgs = {
  id: Scalars['String'];
};


export type EntriesImageArgs = {
  id: Scalars['String'];
};


export type EntriesLinkArgs = {
  id: Scalars['String'];
};


export type EntriesMetadataArgs = {
  id: Scalars['String'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String'];
};


export type EntriesResourceTileArgs = {
  id: Scalars['String'];
};


export type EntriesResourceTilesArgs = {
  id: Scalars['String'];
};


export type EntriesRichTextArgs = {
  id: Scalars['String'];
};


export type EntriesSectionArgs = {
  id: Scalars['String'];
};


export type EntriesTileArgs = {
  id: Scalars['String'];
};


export type EntriesTilesArgs = {
  id: Scalars['String'];
};

export type FeatureTile = IFeatureTile & IIconTile & ITile & PokValue & {
  __typename?: 'FeatureTile';
  body?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<PokMedia>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type FeatureTileCollection = {
  __typename?: 'FeatureTileCollection';
  nodes: Array<Maybe<IFeatureTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeatureTileCondition = {
  body?: Maybe<Scalars['String']>;
  features?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FeatureTileFilter = {
  and?: Maybe<Array<FeatureTileFilter>>;
  body?: Maybe<ScalarStringFilter>;
  features?: Maybe<ScalarStringFilterMulti>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<FeatureTileFilter>>;
  title?: Maybe<ScalarStringFilter>;
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

export type FeatureTiles = IFeatureTiles & PokValue & {
  __typename?: 'FeatureTiles';
  body?: Maybe<Array<Maybe<FeatureTile>>>;
  id: Scalars['String'];
};

export type FeatureTilesCollection = {
  __typename?: 'FeatureTilesCollection';
  nodes: Array<Maybe<IFeatureTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Hero = IHero & PokValue & {
  __typename?: 'Hero';
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type HeroCollection = {
  __typename?: 'HeroCollection';
  nodes: Array<Maybe<IHero>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HeroCondition = {
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HeroFilter = {
  and?: Maybe<Array<HeroFilter>>;
  body?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<HeroFilter>>;
  title?: Maybe<ScalarStringFilter>;
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

export type IAuthor = {
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  name?: Maybe<Scalars['String']>;
  pokko: Pokko;
};

export type IBlogPost = {
  alias: Scalars['String'];
  alias2?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Author>>>;
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  date?: Maybe<Scalars['String']>;
  estimatedReadTime?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title2?: Maybe<Scalars['String']>;
};

export type IContentPage = {
  alias: Scalars['String'];
  alias2?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  estimatedReadTime?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title2?: Maybe<Scalars['String']>;
};

export type IEarlyAccessForm = {
  id: Scalars['String'];
  link?: Maybe<Link>;
  style?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IFeatureTile = {
  body?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<PokMedia>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type IFeatureTiles = {
  body?: Maybe<Array<Maybe<FeatureTile>>>;
  id: Scalars['String'];
};

export type IHero = {
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type IIconTile = {
  body?: Maybe<Scalars['String']>;
  icon?: Maybe<PokMedia>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type IIconTiles = {
  body?: Maybe<Array<Maybe<IconTile>>>;
  id: Scalars['String'];
  layout?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IImage = {
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
};

export type ILink = {
  id: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type IMetadata = {
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
  pokko: Pokko;
};

export type IModularPage = {
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
  pokko: Pokko;
};

export type IResourceTile = {
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type IResourceTiles = {
  body?: Maybe<Array<Maybe<ResourceTile>>>;
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IRichText = {
  body?: Maybe<PokRichText>;
  id: Scalars['String'];
};

export type ISection = {
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ITile = {
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type ITiles = {
  body?: Maybe<Array<Maybe<Tile>>>;
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IconTile = IIconTile & ITile & PokValue & {
  __typename?: 'IconTile';
  body?: Maybe<Scalars['String']>;
  icon?: Maybe<PokMedia>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type IconTileCollection = {
  __typename?: 'IconTileCollection';
  nodes: Array<Maybe<IIconTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IconTileCondition = {
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IconTileFilter = {
  and?: Maybe<Array<IconTileFilter>>;
  body?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<IconTileFilter>>;
  title?: Maybe<ScalarStringFilter>;
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

export type IconTiles = IIconTiles & ISection & PokValue & {
  __typename?: 'IconTiles';
  body?: Maybe<Array<Maybe<IconTile>>>;
  id: Scalars['String'];
  layout?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IconTilesCollection = {
  __typename?: 'IconTilesCollection';
  nodes: Array<Maybe<IIconTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IconTilesCondition = {
  layout?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IconTilesFilter = {
  and?: Maybe<Array<IconTilesFilter>>;
  id?: Maybe<ScalarIdFilter>;
  layout?: Maybe<ScalarStringFilter>;
  or?: Maybe<Array<IconTilesFilter>>;
  summary?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
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

export type Image = IImage & PokValue & {
  __typename?: 'Image';
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
};

export type ImageCollection = {
  __typename?: 'ImageCollection';
  nodes: Array<Maybe<IImage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Link = ILink & PokValue & {
  __typename?: 'Link';
  id: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  nodes: Array<Maybe<ILink>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LinkCondition = {
  target?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type LinkFilter = {
  and?: Maybe<Array<LinkFilter>>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<LinkFilter>>;
  target?: Maybe<ScalarStringFilter>;
  text?: Maybe<ScalarStringFilter>;
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

export type Metadata = IMetadata & PokEntry & {
  __typename?: 'Metadata';
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
  pokko: Pokko;
};

export type MetadataCollection = {
  __typename?: 'MetadataCollection';
  nodes: Array<Maybe<IMetadata>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MetadataCondition = {
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type MetadataFilter = {
  and?: Maybe<Array<MetadataFilter>>;
  id?: Maybe<ScalarIdFilter>;
  metaDescription?: Maybe<ScalarStringFilter>;
  metaTitle?: Maybe<ScalarStringFilter>;
  or?: Maybe<Array<MetadataFilter>>;
};

export enum MetadataOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type ModularPage = IMetadata & IModularPage & PokEntry & {
  __typename?: 'ModularPage';
  body?: Maybe<Array<Maybe<ModularPage_Body>>>;
  id: Scalars['String'];
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<PokMedia>;
  metaTitle?: Maybe<Scalars['String']>;
  pokko: Pokko;
};

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<IModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ModularPageCondition = {
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type ModularPageFilter = {
  and?: Maybe<Array<ModularPageFilter>>;
  id?: Maybe<ScalarIdFilter>;
  metaDescription?: Maybe<ScalarStringFilter>;
  metaTitle?: Maybe<ScalarStringFilter>;
  or?: Maybe<Array<ModularPageFilter>>;
};

export enum ModularPageOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type ModularPage_Body = EarlyAccessForm | FeatureTiles | Hero | IconTiles | Image | ResourceTiles | RichText | Tiles;

export type Page = {
  __typename?: 'Page';
  entry?: Maybe<PokEntry>;
  entryId?: Maybe<Scalars['String']>;
  fullPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
};

export type PagesCondition = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathExact?: Maybe<Scalars['Boolean']>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  contentType: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  size: Scalars['Int'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type PokMediaUrlArgs = {
  process?: Maybe<PokMediaProcess>;
};

export enum PokMediaFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum PokMediaPosition {
  Bottom = 'BOTTOM',
  Centre = 'CENTRE',
  Left = 'LEFT',
  LeftBottom = 'LEFT_BOTTOM',
  LeftTop = 'LEFT_TOP',
  Right = 'RIGHT',
  RightBottom = 'RIGHT_BOTTOM',
  RightTop = 'RIGHT_TOP',
  Top = 'TOP'
}

export type PokMediaProcess = {
  fit?: Maybe<PokMediaFit>;
  height?: Maybe<Scalars['Int']>;
  position?: Maybe<PokMediaPosition>;
  width?: Maybe<Scalars['Int']>;
};

export type PokRichText = {
  __typename?: 'PokRichText';
  body?: Maybe<Scalars['JSON']>;
  embeds?: Maybe<Array<Maybe<PokValue>>>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type Pokko = {
  __typename?: 'Pokko';
  created: Scalars['String'];
  id: Scalars['String'];
  model: Scalars['String'];
  modified: Scalars['String'];
  name: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Entries>;
  entry?: Maybe<PokEntry>;
  sync?: Maybe<SyncCollection>;
  taxonomy?: Maybe<PageCollection>;
};


export type QueryEntryArgs = {
  id?: Maybe<Scalars['String']>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySyncArgs = {
  filter?: Maybe<SyncCondition>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type QueryTaxonomyArgs = {
  filter?: Maybe<PagesCondition>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type ResourceTile = IResourceTile & ITile & PokValue & {
  __typename?: 'ResourceTile';
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  link?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type ResourceTileCollection = {
  __typename?: 'ResourceTileCollection';
  nodes: Array<Maybe<IResourceTile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTileCondition = {
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ResourceTileFilter = {
  and?: Maybe<Array<ResourceTileFilter>>;
  body?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<ResourceTileFilter>>;
  title?: Maybe<ScalarStringFilter>;
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

export type ResourceTiles = IResourceTiles & ISection & PokValue & {
  __typename?: 'ResourceTiles';
  body?: Maybe<Array<Maybe<ResourceTile>>>;
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ResourceTilesCollection = {
  __typename?: 'ResourceTilesCollection';
  nodes: Array<Maybe<IResourceTiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTilesCondition = {
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ResourceTilesFilter = {
  and?: Maybe<Array<ResourceTilesFilter>>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<ResourceTilesFilter>>;
  summary?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
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

export type RichText = IRichText & PokValue & {
  __typename?: 'RichText';
  body?: Maybe<PokRichText>;
  id: Scalars['String'];
};

export type RichTextCollection = {
  __typename?: 'RichTextCollection';
  nodes: Array<Maybe<IRichText>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RichTextCondition = {
  body?: Maybe<Scalars['String']>;
};

export type RichTextFilter = {
  and?: Maybe<Array<RichTextFilter>>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<RichTextFilter>>;
};

export enum RichTextOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type ScalarDateFilter = {
  equalTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isNull?: Maybe<Scalars['Boolean']>;
  notEqualTo?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ScalarIdFilter = {
  equalTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isNull?: Maybe<Scalars['Boolean']>;
  notEqualTo?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ScalarIdFilterMulti = {
  every?: Maybe<Array<Maybe<Scalars['String']>>>;
  none?: Maybe<Array<Maybe<Scalars['String']>>>;
  some?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ScalarNumberFilter = {
  equalTo?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  isNull?: Maybe<Scalars['Boolean']>;
  notEqualTo?: Maybe<Scalars['Float']>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ScalarStringFilter = {
  equalTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isNull?: Maybe<Scalars['Boolean']>;
  notEqualTo?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ScalarStringFilterMulti = {
  every?: Maybe<Array<Maybe<Scalars['String']>>>;
  none?: Maybe<Array<Maybe<Scalars['String']>>>;
  some?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Section = ISection & PokValue & {
  __typename?: 'Section';
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SectionCollection = {
  __typename?: 'SectionCollection';
  nodes: Array<Maybe<ISection>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SectionCondition = {
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SectionFilter = {
  and?: Maybe<Array<SectionFilter>>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<SectionFilter>>;
  summary?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
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

export type Sync = {
  __typename?: 'Sync';
  action?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
};

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SyncCondition = {
  after?: Maybe<Scalars['String']>;
};

export type Tile = ITile & PokValue & {
  __typename?: 'Tile';
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type TileCollection = {
  __typename?: 'TileCollection';
  nodes: Array<Maybe<ITile>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TileCondition = {
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TileFilter = {
  and?: Maybe<Array<TileFilter>>;
  body?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<TileFilter>>;
  title?: Maybe<ScalarStringFilter>;
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

export type Tiles = ISection & ITiles & PokValue & {
  __typename?: 'Tiles';
  body?: Maybe<Array<Maybe<Tile>>>;
  id: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TilesCollection = {
  __typename?: 'TilesCollection';
  nodes: Array<Maybe<ITiles>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TilesCondition = {
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TilesFilter = {
  and?: Maybe<Array<TilesFilter>>;
  id?: Maybe<ScalarIdFilter>;
  or?: Maybe<Array<TilesFilter>>;
  summary?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
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

export type ListBlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBlogPostsQuery = { __typename?: 'Query', entries?: { __typename?: 'Entries', allBlogPost?: { __typename?: 'BlogPostCollection', nodes: Array<{ __typename?: 'BlogPost', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, estimatedReadTime?: number | null | undefined, pokko: { __typename?: 'Pokko', path?: Array<string | null | undefined> | null | undefined } } | null | undefined> } | null | undefined } | null | undefined };

export type BlogPostListingFragment = { __typename?: 'BlogPostCollection', nodes: Array<{ __typename?: 'BlogPost', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, estimatedReadTime?: number | null | undefined, pokko: { __typename?: 'Pokko', path?: Array<string | null | undefined> | null | undefined } } | null | undefined> };

export type BlogPostSummaryFragment = { __typename?: 'BlogPost', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, estimatedReadTime?: number | null | undefined, pokko: { __typename?: 'Pokko', path?: Array<string | null | undefined> | null | undefined } };

type ModularPageContent_BlogPost_Fragment = { __typename?: 'BlogPost', metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

type ModularPageContent_ContentPage_Fragment = { __typename?: 'ContentPage', metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

type ModularPageContent_ModularPage_Fragment = { __typename?: 'ModularPage', metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

export type ModularPageContentFragment = ModularPageContent_BlogPost_Fragment | ModularPageContent_ContentPage_Fragment | ModularPageContent_ModularPage_Fragment;

type ContentPageContent_BlogPost_Fragment = { __typename?: 'BlogPost', alias: string, title?: string | null | undefined, metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

type ContentPageContent_ContentPage_Fragment = { __typename?: 'ContentPage', alias: string, title?: string | null | undefined, metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

export type ContentPageContentFragment = ContentPageContent_BlogPost_Fragment | ContentPageContent_ContentPage_Fragment;

export type BlogPostContentFragment = { __typename?: 'BlogPost', date?: string | null | undefined, alias: string, title?: string | null | undefined, metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

type MetadataContent_BlogPost_Fragment = { __typename?: 'BlogPost', metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

type MetadataContent_ContentPage_Fragment = { __typename?: 'ContentPage', metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

type MetadataContent_Metadata_Fragment = { __typename?: 'Metadata', metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

type MetadataContent_ModularPage_Fragment = { __typename?: 'ModularPage', metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined };

export type MetadataContentFragment = MetadataContent_BlogPost_Fragment | MetadataContent_ContentPage_Fragment | MetadataContent_Metadata_Fragment | MetadataContent_ModularPage_Fragment;

type ModularPageBody_EarlyAccessForm_Fragment = { __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined };

type ModularPageBody_FeatureTile_Fragment = { __typename: 'FeatureTile' };

type ModularPageBody_FeatureTiles_Fragment = { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined };

type ModularPageBody_Hero_Fragment = { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined };

type ModularPageBody_IconTile_Fragment = { __typename: 'IconTile' };

type ModularPageBody_IconTiles_Fragment = { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined };

type ModularPageBody_Image_Fragment = { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined };

type ModularPageBody_Link_Fragment = { __typename: 'Link' };

type ModularPageBody_ResourceTile_Fragment = { __typename: 'ResourceTile' };

type ModularPageBody_ResourceTiles_Fragment = { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

type ModularPageBody_RichText_Fragment = { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined };

type ModularPageBody_Section_Fragment = { __typename: 'Section' };

type ModularPageBody_Tile_Fragment = { __typename: 'Tile' };

type ModularPageBody_Tiles_Fragment = { __typename: 'Tiles' };

export type ModularPageBodyFragment = ModularPageBody_EarlyAccessForm_Fragment | ModularPageBody_FeatureTile_Fragment | ModularPageBody_FeatureTiles_Fragment | ModularPageBody_Hero_Fragment | ModularPageBody_IconTile_Fragment | ModularPageBody_IconTiles_Fragment | ModularPageBody_Image_Fragment | ModularPageBody_Link_Fragment | ModularPageBody_ResourceTile_Fragment | ModularPageBody_ResourceTiles_Fragment | ModularPageBody_RichText_Fragment | ModularPageBody_Section_Fragment | ModularPageBody_Tile_Fragment | ModularPageBody_Tiles_Fragment;

export type HeroModuleFragment = { __typename?: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined };

export type IconTilesModuleFragment = { __typename?: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined };

export type FeatureTilesModuleFragment = { __typename?: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined };

export type ResourceTileModuleFragment = { __typename?: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type EarlyAccessFormModuleFragment = { __typename?: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined };

export type RichTextModuleFragment = { __typename?: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined };

export type ImageModuleFragment = { __typename?: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined };

export type GetPageByPathQueryVariables = Exact<{
  path: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetPageByPathQuery = { __typename?: 'Query', entry?: { __typename?: 'Author' } | { __typename?: 'BlogPost', date?: string | null | undefined, alias: string, title?: string | null | undefined, metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename?: 'ContentPage', alias: string, title?: string | null | undefined, metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename?: 'Metadata' } | { __typename?: 'ModularPage', metaDescription?: string | null | undefined, metaTitle?: string | null | undefined, body?: Array<{ __typename: 'EarlyAccessForm', style?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | { __typename: 'FeatureTiles', featureTilesBody?: Array<{ __typename?: 'FeatureTile', title?: string | null | undefined, body?: string | null | undefined, features?: Array<string | null | undefined> | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Hero', title?: string | null | undefined, heroBody?: string | null | undefined, link?: { __typename?: 'Link', target?: string | null | undefined, text?: string | null | undefined } | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename: 'IconTiles', layout?: string | null | undefined, title?: string | null | undefined, summary?: string | null | undefined, iconTileBody?: Array<{ __typename?: 'IconTile', title?: string | null | undefined, body?: string | null | undefined, icon?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'Image', image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename: 'ResourceTiles', title?: string | null | undefined, summary?: string | null | undefined, resourceTilesBody?: Array<{ __typename?: 'ResourceTile', title?: string | null | undefined, body?: string | null | undefined, link?: { __typename?: 'Link', text?: string | null | undefined, target?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'RichText', body?: { __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined } | { __typename: 'Tiles' } | null | undefined> | null | undefined, metaImage?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined };

export type GetDynamicPagePathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDynamicPagePathsQuery = { __typename?: 'Query', taxonomy?: { __typename?: 'PageCollection', nodes: Array<{ __typename?: 'Page', path?: Array<string | null | undefined> | null | undefined, entryId?: string | null | undefined } | null | undefined> } | null | undefined };

export const BlogPostSummaryFragmentDoc = gql`
    fragment BlogPostSummary on IBlogPost {
  id
  title
  date
  summary
  estimatedReadTime
  pokko {
    path
  }
}
    `;
export const BlogPostListingFragmentDoc = gql`
    fragment BlogPostListing on BlogPostCollection {
  nodes {
    ...BlogPostSummary
  }
}
    ${BlogPostSummaryFragmentDoc}`;
export const MetadataContentFragmentDoc = gql`
    fragment MetadataContent on IMetadata {
  metaDescription
  metaTitle
  metaImage {
    url
  }
}
    `;
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
export const EarlyAccessFormModuleFragmentDoc = gql`
    fragment EarlyAccessFormModule on EarlyAccessForm {
  style
  title
  summary
  link {
    ... on Link {
      text
      target
    }
  }
}
    `;
export const RichTextModuleFragmentDoc = gql`
    fragment RichTextModule on RichText {
  body {
    body
  }
}
    `;
export const ImageModuleFragmentDoc = gql`
    fragment ImageModule on Image {
  image {
    url
    height
    width
  }
}
    `;
export const ModularPageBodyFragmentDoc = gql`
    fragment ModularPageBody on PokValue {
  __typename
  ...HeroModule
  ...IconTilesModule
  ...FeatureTilesModule
  ...ResourceTileModule
  ...EarlyAccessFormModule
  ...RichTextModule
  ...ImageModule
}
    ${HeroModuleFragmentDoc}
${IconTilesModuleFragmentDoc}
${FeatureTilesModuleFragmentDoc}
${ResourceTileModuleFragmentDoc}
${EarlyAccessFormModuleFragmentDoc}
${RichTextModuleFragmentDoc}
${ImageModuleFragmentDoc}`;
export const ModularPageContentFragmentDoc = gql`
    fragment ModularPageContent on IModularPage {
  ...MetadataContent
  body {
    ...ModularPageBody
  }
}
    ${MetadataContentFragmentDoc}
${ModularPageBodyFragmentDoc}`;
export const ContentPageContentFragmentDoc = gql`
    fragment ContentPageContent on IContentPage {
  ...ModularPageContent
  alias
  title
}
    ${ModularPageContentFragmentDoc}`;
export const BlogPostContentFragmentDoc = gql`
    fragment BlogPostContent on IBlogPost {
  ...ContentPageContent
  date
}
    ${ContentPageContentFragmentDoc}`;
export const ListBlogPostsDocument = gql`
    query ListBlogPosts {
  entries {
    allBlogPost(orderBy: DATE_DESC) {
      ...BlogPostListing
    }
  }
}
    ${BlogPostListingFragmentDoc}`;

/**
 * __useListBlogPostsQuery__
 *
 * To run a query within a React component, call `useListBlogPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBlogPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBlogPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListBlogPostsQuery(baseOptions?: Apollo.QueryHookOptions<ListBlogPostsQuery, ListBlogPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBlogPostsQuery, ListBlogPostsQueryVariables>(ListBlogPostsDocument, options);
      }
export function useListBlogPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBlogPostsQuery, ListBlogPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBlogPostsQuery, ListBlogPostsQueryVariables>(ListBlogPostsDocument, options);
        }
export type ListBlogPostsQueryHookResult = ReturnType<typeof useListBlogPostsQuery>;
export type ListBlogPostsLazyQueryHookResult = ReturnType<typeof useListBlogPostsLazyQuery>;
export type ListBlogPostsQueryResult = Apollo.QueryResult<ListBlogPostsQuery, ListBlogPostsQueryVariables>;
export const GetPageByPathDocument = gql`
    query GetPageByPath($path: [String!]!) {
  entry(path: $path) {
    ...ModularPageContent
    ...BlogPostContent
    ...ContentPageContent
  }
}
    ${ModularPageContentFragmentDoc}
${BlogPostContentFragmentDoc}
${ContentPageContentFragmentDoc}`;

/**
 * __useGetPageByPathQuery__
 *
 * To run a query within a React component, call `useGetPageByPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageByPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageByPathQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useGetPageByPathQuery(baseOptions: Apollo.QueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, options);
      }
export function useGetPageByPathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, options);
        }
export type GetPageByPathQueryHookResult = ReturnType<typeof useGetPageByPathQuery>;
export type GetPageByPathLazyQueryHookResult = ReturnType<typeof useGetPageByPathLazyQuery>;
export type GetPageByPathQueryResult = Apollo.QueryResult<GetPageByPathQuery, GetPageByPathQueryVariables>;
export const GetDynamicPagePathsDocument = gql`
    query GetDynamicPagePaths {
  taxonomy(filter: {path: ["website", "home"]}) {
    nodes {
      path
      entryId
    }
  }
}
    `;

/**
 * __useGetDynamicPagePathsQuery__
 *
 * To run a query within a React component, call `useGetDynamicPagePathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDynamicPagePathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDynamicPagePathsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDynamicPagePathsQuery(baseOptions?: Apollo.QueryHookOptions<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>(GetDynamicPagePathsDocument, options);
      }
export function useGetDynamicPagePathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>(GetDynamicPagePathsDocument, options);
        }
export type GetDynamicPagePathsQueryHookResult = ReturnType<typeof useGetDynamicPagePathsQuery>;
export type GetDynamicPagePathsLazyQueryHookResult = ReturnType<typeof useGetDynamicPagePathsLazyQuery>;
export type GetDynamicPagePathsQueryResult = Apollo.QueryResult<GetDynamicPagePathsQuery, GetDynamicPagePathsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "IAuthor": [
      "Author"
    ],
    "IBlogPost": [
      "BlogPost"
    ],
    "IContentPage": [
      "BlogPost",
      "ContentPage"
    ],
    "IEarlyAccessForm": [
      "EarlyAccessForm"
    ],
    "IFeatureTile": [
      "FeatureTile"
    ],
    "IFeatureTiles": [
      "FeatureTiles"
    ],
    "IHero": [
      "Hero"
    ],
    "IIconTile": [
      "FeatureTile",
      "IconTile"
    ],
    "IIconTiles": [
      "IconTiles"
    ],
    "IImage": [
      "Image"
    ],
    "ILink": [
      "Link"
    ],
    "IMetadata": [
      "BlogPost",
      "ContentPage",
      "Metadata",
      "ModularPage"
    ],
    "IModularPage": [
      "BlogPost",
      "ContentPage",
      "ModularPage"
    ],
    "IResourceTile": [
      "ResourceTile"
    ],
    "IResourceTiles": [
      "ResourceTiles"
    ],
    "IRichText": [
      "RichText"
    ],
    "ISection": [
      "IconTiles",
      "ResourceTiles",
      "Section",
      "Tiles"
    ],
    "ITile": [
      "FeatureTile",
      "IconTile",
      "ResourceTile",
      "Tile"
    ],
    "ITiles": [
      "Tiles"
    ],
    "ModularPage_Body": [
      "EarlyAccessForm",
      "FeatureTiles",
      "Hero",
      "IconTiles",
      "Image",
      "ResourceTiles",
      "RichText",
      "Tiles"
    ],
    "PokEntry": [
      "Author",
      "BlogPost",
      "ContentPage",
      "Metadata",
      "ModularPage"
    ],
    "PokValue": [
      "EarlyAccessForm",
      "FeatureTile",
      "FeatureTiles",
      "Hero",
      "IconTile",
      "IconTiles",
      "Image",
      "Link",
      "ResourceTile",
      "ResourceTiles",
      "RichText",
      "Section",
      "Tile",
      "Tiles"
    ]
  }
};
      export default result;
    