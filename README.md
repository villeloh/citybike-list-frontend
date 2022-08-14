# Citybike List App (frontend)

## General info

I created this project (with [Create React App](https://github.com/facebook/create-react-app)) to serve 
as the frontend for Solita's Dev Academy challenge 2022.

You can:
- view citybike trips and, by clicking on the legend, sort the trips according to name of departure / return station, 
travel distance, or duration (click again to switch between ascending / descending order)
- view citybike stations and, by clicking on the listed stations, obtain more info about them

## Installation & running

The project is run locally on your own computer.

1. Download the project as a zip file or run 'git clone' on it with your terminal shell of choice.
2. Make sure you have Node Package Manager ('npm') installed on your computer (refer to Google for the instructions).
2. In the project folder, run the terminal command 'npm install'.
4. Then, run the command 'npm start'.
5. This should open a web page which displayes the trips and stations.

6. In order to correctly fetch and display the data, be sure to download and run the backend version of the project as well:
[citybike-list-backend.](https://github.com/villeloh/citybike-list-backend)

## About the project

# Tech choices

I went with React and plain JS because time was of the essence and they're the most familiar frontend tools to me.
I managed to install a list-scrolling library before the Wifi broke on my computer, but that was it; I'm not really a 
frontend guy (more backend & Android), so I'm not too familiar with the library choices for React anyway.

I really struggled with the CSS given the time constraint (I found out about the Academy about a week before the deadline), 
so there are a lot of redundant classes and zero elegance involved. I wanted to try out Tailwind for the styling, but I know 
better than trying to learn entirely new tools on such a tight deadline.

# Other choices

I split the project into two different git repos, as typically the frontend and backend are not included in the same repo; 
for me it would lead to a confusing and error-prone workflow.

Early on in the project, I chose which requirements I wanted to fulfill; I'm pleased to say that in the end 
I finished almost all of them (with some rough edges). There is no UI to add or delete trips or stations, 
although the server endpoints do exist for that. 

I thought about doing a remote version, but in the end decided against it. Heroku or AWS Amplify would've 
worked fine for it in theory, but I didn't want to risk losing time to the obscure issues that sometimes crop up with them.

Time pressure and inexperience are also the reasons why there are no tests of any kind for either part of the project.
I've fiddled with unit tests in Java Spring and JS, but never really learned a framework top-to-bottom.

I deemed building or ejecting the project to be out of scope, as the main things are probably code quality and structure.

# Final words (for now)

It was a fun little project, although I was in a tremendous hurry. There is a lot of room for improvement; 
in particular, the styling is very bare-bones and downright horrible in parts. I can maintain frontend 
projects just fine, but doing them from scratch is a bit awkward.
