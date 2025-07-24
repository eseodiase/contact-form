# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

- [Desktop View](./src/solution_files/screenshots/desktop_view.jpg)
- [Mobile View](./src/solution_files/screenshots/mobile_view.jpg)
- [Hover and Focus](./src/solution_files/screenshots/hover_&_focus.jpg)
- [Error State](./src/solution_files/screenshots/error_state.jpg)
- [Success State](./src/solution_files/screenshots/success_state.jpg)

### Links

- [Solution URL](https://github.com/eseodiase/contact-form)
- [Live Site URL](https://eseodiase.github.io/contact-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow (developed entirely on my mobile device)


### What I learned

Building this form proves to be more challenging than how it actually looks. However, it has been quite interesting. Here’s a simple breakdown of what I’ve learned from building this contact form: 

How to:  

- Prevent browser form validation.
- Stop submission if fields are empty.  
- Validates emails properly.  
- Make sure either one of the checkboxes is checked.  
- Show helpful errors without reloading.
- Setup font locally within a project.

```js
// email format validation
else if (
  !em.value.match(/^[^@]+@[^@]+\.[^@]+$/)
) {
  eErr.innerHTML = "Please enter a valid email address";
  e.preventDefault();
}
```

### Continued development

In the future, I would like to implement more advanced CSS, and JavaScript techniques.

### Useful resources

- [Spck Editor Documentation](https://spck.io/docs) - Essential for mobile development setup
- [Screenfly](https://screenfly.org) - Useful for responsive testing without multiple devices
- [w3schools](https://w3schools.com) - Useful for custom checkbox and some other css styling and more

## Author

- Frontend Mentor - [@eseodiase](https://www.frontendmentor.io/profile/eseodiase)
```