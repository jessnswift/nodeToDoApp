'use strict';

const server = require('../../server/server');
const ds = server.dataSources.mysql;
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'task'];
ds.automigrate(lbTables, function(er) {
    if (er) {
      throw er;
    }
    console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
    ds.disconnect();
   });

