/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global XT:true, XM:true, XV:true, exports:true, describe:true, it:true, require:true */

(function () {
  "use strict";

  var crud = require('../lib/crud'),
   data = {
    recordType: "XM.TaxAssignment",
    autoTestAttributes: true,
    skipUpdate: true,
    createHash: {
      tax: {code: "VATAX-A"},
      taxZone: {code: "GA TAX"},
      taxType: {name: "Adjustment"}
    },
    updateHash: {
      uuid: "6d8253b8-6516-48a7-b128-c566f1d70b66"
    }
  };

  describe('TaxAssignment CRUD Test', function () {
    crud.runAllCrud(data);
  });
}());
