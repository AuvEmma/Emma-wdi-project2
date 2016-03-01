# Emma-wdi-project2
Web Based Full Stack App

https://petmeetup.herokuapp.com/

#Pet Meetup

###User Stories

![](Proposal/GA_Project2_ERD.png)

* As a user, I need to be able to signup and login from the homepage by typing in my username and password (/)
* As a user, I need to be redirected to my own homepage after login (/users/:id)
* The user homepage will have a left column list of My pets, My events, Create events, all events, there will be a list of added events in the right of the page.
* When click on my pets, redirect to (user/:id/pets) and show all list of pets that the current user has.
* The user should be able to add pets by clicking a add pets button and redirect to (user/:id/pets/new)(imgurl, breed, name, birthdate, funfact), the the user can click submit button to create new pet info and redirect to (user/:id/pets)
* Under each pet, there is a delete, and edit. When click on delete or edit, redirect to (user/:id/pets or user/:id/pets/:id/edit)

* When user click on Create events, redirect to /user/:id/myevents/new and show a form of event info( name, date, time,location,detail, img_url,create by)
* User can click submit to submit event and redirect to /user/:id/myevents
* User need to be able to delete/edit created events by clicking on delete button (redirect to /user/:id/myevents/) and edit button(redirect to /user/:id/myevents/:id)

* when user click on All events, '/all' should appear and show all the events in database includes events from other user
* user can add other user's event by click on add event button under each event and redirect to (/user/:id/myevents)



###Bonus

* Use pet breed API to show pet photo.
* Search events from all events
