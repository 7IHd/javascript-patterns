'use strict';

/**
 * Constructor Pattern
 * Use to create new objects with their own object scope
 *
 *
 * The new keyword
 * ----------------------------------------------------
 * Creates a brand new object
 * Links to an object prototype
 * Binds 'this' to the new object scope
 * Implicitly returns this
 *
 * Drawbacks
 * -----------------------------------------------------
 * The toString function is recreated all four times
 * Which is why Prototypes are better
 */

const Task = function (name) {
	this.name = name;
	this.completed = false;

	this.complete = function () {
		console.log(`completing task: ${this.name}`);
		this.completed = true;
	};

	this.save = function () {
		console.log(`saving task: ${this.name}`);
	};
};

const task1 = new Task('create a demo for constructors'),
	task2 = new Task('create a demo for modules'),
	task3 = new Task('create a demo for singletons'),
	task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
