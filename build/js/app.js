!function t(e,n,r){function i(a,u){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(o)return o(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){$(function(){$(".landing-text").find("h1").velocity("fadeIn",1e3),$(".landing-text").find("p").css("opacity",0).delay(300).velocity("transition.slideUpIn",{stagger:500}),function(){$(".call-to-action").find("div").velocity({translateY:"-30px",rotateZ:"10deg"},100,"easeOut").velocity({rotateZ:"-8deg"},150).velocity({translateY:"0",rotateZ:"0"},{duration:600,easing:[500,14]}),setTimeout(arguments.callee,5e3)}()})},{}]},{},[1]);