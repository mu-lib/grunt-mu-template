/*
 * grunt-mu-template
 * https://github.com/mikaelkaron/grunt-git-dist
 *
 * Copyright (c) 2013 Mikael Karon
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
	"use strict";

	var compile = require("mu-template");

	grunt.task.registerMultiTask("mu-template", "Process files using mu-template", function () {
		var me = this;
		var data = me.data;
		var compiled = {};

		me.files.forEach(function (file) {
			var src = file.src;
			var template = compiled[src] || (compiled[src] = compile(grunt.file.read(src)));

			grunt.file.write(file.dest, template.call(me, data));
		});
	});
};
