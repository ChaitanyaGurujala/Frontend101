/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comui5/sap-ui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
