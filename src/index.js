import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "font-awesome/css/font-awesome.css";

render(<App />, document.querySelector("#main"));

// window.addEventListener('scroll', function () {
//   if (window.scrollY > window.innerHeight / 1) {
//     $('nav').addClass('scrolled')
//   } else {
//     $('nav').removeClass('scrolled')
//   }
// });

// const navbarHeight = $('.navbar').outerHeight()

// // Smooth Scroll 

// const $root = $('html, body');

// $('a[href^="#"]').click(function (e) {
//   e.preventDefault()

//   let href = $.attr(this, 'href');
//   const newPosition = $(href).offset().top - navbarHeight - 10

//   if (history.pushState) {
//     history.pushState(null, null, href);
//   }

//   $root.animate({
//     scrollTop: newPosition
//   }, 1000, function () {
//     if (!history.pushState) {
//       location.hash = `/${href}`;
//     }
//   });

//   return false;
// });