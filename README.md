# FAQ-Accordion-Card

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge
Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

Mobile view:

![mobpreview](https://user-images.githubusercontent.com/95960286/194751909-7d85c1dd-8f76-416f-a65b-e083ecb2dd78.png)

![mobactive](https://user-images.githubusercontent.com/95960286/194751911-2156bfc2-c8ba-4c73-aab4-93ea7a7a3044.png)


Desktop view:

![desktoppreview](https://user-images.githubusercontent.com/95960286/194751926-bfb4e4f2-72de-4ec3-84c0-5fa6aa95ae52.png)

![desktopactive](https://user-images.githubusercontent.com/95960286/194751931-351e7733-5643-4b2a-abcb-e55b3e6f43d2.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/faq-accordion-card-nQIAV9lUZL)
- Live Site URL: [live site](https://astounding-quokka-4dcf36.netlify.app/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I have learnt how to position the background image using css by backgroung-position property. And I learnt how to create a dropdown using JavaScript, applying style from javaScript and so on.


```css
    background-image: url(images/bg-pattern-desktop.svg);
    background-repeat: no-repeat;
    background-size: 600px;
    background-position: 50px -150px;
```
```js
function show1() {
    if (count1 % 2 == 0) {

        ques1.nextElementSibling.nextElementSibling.style.display = 'block';
        ques1.nextElementSibling.style.transform = 'rotate(-180deg)';
        questionDark(ques1);
        count1++;
    } else {
        ques1.nextElementSibling.nextElementSibling.style.display = 'none';
        ques1.nextElementSibling.style.transform = 'rotate(0deg)';
        questionlight(ques1);
        count1++;
    }
}

```

## Author

- Frontend Mentor - [Vijayaragavan](https://www.frontendmentor.io/profile/vijayaragavankts)
