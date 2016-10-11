'use strict';

import Realm from 'realm';
import Schema from './schema';

function configureRealm() {
    var schema =new Schema();
    var next = Realm.schemaVersion(Realm.defaultPath);
    if (next>0) {
        while(next<schema.schemas.length){
          var migrationSchema= schema.schemas[next++];
          var migrationRealm = new Realm(migrationSchema);
          migrationRealm.close();
        }
    }
    var currentSchema= schema.current();
    var realm =new Realm(currentSchema);
    realm.close();
}
module.exports = configureRealm;
