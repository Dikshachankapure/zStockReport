/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"stock/zstockreport/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});