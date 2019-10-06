# Angular SVG Diagram Prove of Concept

## Just a Prove of Concept

Nowaday, it is not hard to draw digram in HTML5 via SVG. I am seeking a way to draw diagram in HTML5:
- Prgrammatic that readable
- Responce of user behaviour
- Portable that can plug to cloud platform

## Basic of SVG

There are some built in tags allow us to draft shapes and their connections:
* circle - Small circle represent incoming or outgoing contect point
* rect - Basic of Nodes
* line - Dividers
* text - Labels
Please see my [Prototype of a Node] and enjoy with the [Demo](http://htmlpreview.github.io/?https://github.com/laytzehwu/poc-angular-svg/blob/master/doc/basic-shapes-connections.html).

## Prototype
An Angular base application for prototyping of diagram and under below environment:
* Angular CLI: 8.1.3
* Node: 10.16.0
* OS: win32 x64

## Unit Test
Unit Test run under below tech stack:
* 

## e2e Test
Prerequisite
[webdriver-manager] is required before run e2e test. It is helping to resolve [Chrome driver problem](https://github.com/angular/protractor/issues/5225). Setup [webdriver-manager] with below steps:
1. Install [webdriver-manager]: npm i webdriver-manager -g
2. Download selenium by run: webdriver-manager update
3. Start [webdriver-manager]: webdriver-manager start
4. Update selenium from webdriver-manager to protractor:
	* from node_modules\webdriver-manager\selenium
	* to node_modules\protractor\node_modules\webdriver-manager\selenium




[Prototype of a Node]: <doc/basic-shapes-connections.html>
[webdriver-manager]: https://www.npmjs.com/package/webdriver-manager