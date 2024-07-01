# [Buena Test](https://buena-chi.vercel.app/)

you can see the live build of the project on the link above.

I chose to do the example test using nextJS with the pages router. I decided to use NextJS as the instructions specified to use React, and the React team have themselves recomended using a framework like nextJS. I decided to use the pages router rather than the app router because I also wanted to use react and would not be able to use it with Server Side Rendering. The styling I did using Vanilla CSS.

There is support for

- local Storage
- Dark Mode/Light Mode
- Responsive Design
- animations on the buttons

I initially started the project trying to save the state using onChange but eventually I switched to doing it onSubmit. The onChange function I decided to use for validation. I have two regexs on the email and the phone number. The phone number is checking that it is a German number.

I redirect the user back to the homePage after submitting the final summary as I was not sure where to best have that information displayed after final submission.

## To Imporve

I ended up taking longer than I expected in this challenge partially because I changed the structure of how I wanted to do it. If I were to keep going I would

- Add more animations and maybe restyle the progressbar
- Style the confirm() to make it more appealing.
- Organize the CSS better to use :root{}

There are little things that need polishing but I know that I could keep going almost forever with styling changes!

## Run Locally

To run the project locally you should be able to just clone it, there are no .env files required.
