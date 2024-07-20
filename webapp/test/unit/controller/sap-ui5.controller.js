/*global QUnit*/

sap.ui.define([
	"comui5/sap-ui5/controller/sap-ui5.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sap-ui5 Controller");

	QUnit.test("I should test the sap-ui5 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
