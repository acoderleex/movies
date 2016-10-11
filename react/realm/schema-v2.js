'use strict';
const Spalsh = {
  name: 'Spalsh',
  properties: {
    imageUrl: 'string',
    url: 'string'
  }
};

const BannerItem = {
  name:'BannerItem',
  properties: {
    name: 'string',
    imageUrl: 'string',
    url: 'string'
  }
};

const Shop = {
  name: 'Shop',
  properties: {
    bannerItem: {
        objectType:'BannerItem',
        type: 'list'
    }
  }
};

module.exports = {
  schema: [Spalsh,BannerItem,Shop],
  schemaVersion: 2,
  migration: ()=>{}
};
