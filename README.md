	
![logo](https://github.com/tanverzahed/1on1/assets/113176044/c04fa28c-237d-4a2f-bcbf-75687e7a0e2e)  **_Your Scheduling Solution_**


---
<br/>
Struggling to coordinate meetings online? Say hello to 1on1, the solution to your scheduling headaches. Our website streamlines the entire process, allowing you to easily share availability, propose meeting times, and receive instant confirmations all in one user-friendly platform. With 1on1, scheduling meetings online has never been easier. Sign up now and revolutionize the way you schedule meetings! <br/>

---
## Development notes: 

For this project, I was provided with a list of user stories that I needed to implement for the project. <br/>
All the user stories are provided in the user_stories.txt, but they can broken down in to the following pages and features. <br/>

#### Contacts:
Feature 1: User must be able to **add** and **remove** other users of the application. 
* I decided to make it so if an user is not apart of the application then it will email  them an  <br/> invitation instead of an error.
* User needs to provide an email address to add people to thier contacts <br/>

Feature 2: User can set a customizable nickname and profile image for thier contacts <br/>
Design:
![contact-design](https://github.com/tanverzahed/1on1/assets/113176044/a6abbb6d-7f51-4d0f-90bb-2a621ea42010) 
![contact-design-2](https://github.com/tanverzahed/1on1/assets/113176044/520edb6c-ce06-4a50-b4f1-4a409ad8087b)

#### Meetings:
Feature 1: User can make an calendar where they can pick preference levels for upcoming weeks. <br/>
Feature 2: User can invite a person from thier contact into the calendar to select thier preference levels. <br/>
Feature 3: An algorithm will suggest an optimal meeting time, which the user can confirm or reject. <br/>
* If the user reject, I just made it so we go through the next best suggested date OR they can change thier current preferences.
* Once confirmed, no more changes to the meeting can be made
#### Login:
Feature: simple login system using token-based authentication for backend, primary key is email no username needed
#### Signup:
Feature: Simple signup system that uses PostgreSQL for database to store user information






