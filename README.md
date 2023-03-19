# Braydens Portfolio { color: red; }

 This is my first personal portfolio. Dedicated to highlight and showcase current and future projects to potential employers and customers.
 Coming from a non traditional background while trying to break into tech, i feel having a portfolio to show that I have obtained the knowledge and skills to be successful in a career change.
 This project was designed and built by me.

## Technologies used in this project

* **Vite**
* **ReactJS**
  * I chose to use react for this project because I feel react is the future of websites. After learning react i wanted to use it as much as possible to further understand it and cement my knowledge of it as well as learn more as I go.
* **TailwindCSS**
  * After learning/getting comfortable with Tailwind, i started to really enjoy it. It's class based approach was really neat. I haven't dived into it head first yet, and im probably not utilizing it to its fullest potential but im excited to gain deeper knowledge of tailwind and the power it holds.
* **HTML**
* **React-Toastify**
  * I wanted a custom pop up notification for my contact form, letting the user know if there message sent successfully. Toastify filled that need and is extremely straight forward to use and easy to customize.
* **emailjs**
  * without having a backend yo hook up to, i need a way to send emails to myself from my portfolio. I've been recommended emailjs by several fellow developers and figured id give it a shot. It works as intended and makes things easier.

## Challenges

Some challenges presented themselves throughout the project and it was a lot of fun to figure them out.

**Trouble with interest hover cards**
One of the more time consuming struggles was getting my interest hover cards to stay in the middle of the screen while on mobile. I looked at the problem and broke it down into steps. My interest content was stored in a interestsData.js file and i was mapping over them. Allowing me to have less DRY'ness throughout my code, and being able to quickly change and/or update the content.
I needed to target specific elements of the mapped array and apply different CSS to them. How can i do this? Well, i broke the problem into smaller bite sized chunks and slowly chipped away at them.
I knew i needed to watch for the index of the elements that were being mapped, and apply conditional styling to said elements. Once i gained control of the index, i realized i could apply conditionals within tailwind! So i did exactly that and managed to get everything working as intended.

**Absolute positioning of my header**
This one was fun! I had to really spend the time and dial in all the appropriate styling for the balls within my framed header section. Working on making it responsive on mobile and getting the positioning just right to make it work.

## Conclusion
This was a fun project, and i really enjoyed all aspects of it, from the design of it to the coding of it. It helped solidify my CSS and React knowledge and future projects will continue to solidify it further.
