'use strict';
const Spalsh = {
  name: 'Spalsh',
  properties: {
      imageUrl: 'string',
      url: 'string'
  }
};

module.exports = {
  schema: [Spalsh],
  schemaVersion: 1,
  migration: ()=>{}
};
