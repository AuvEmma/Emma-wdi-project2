# Emma-wdi-project2
Web Based Full Stack App

https://petmeetup.herokuapp.com/

This app is a place for user to add their pets info and create events (related to pets or not). And also being able to add other's events into my saved events (to be developed).
#Pet Meetup

###User Stories

![](Proposal/GA_Project2_ERD.png)

* User is able to signup and login from the homepage by typing in my username and password (/)
* And user will be redirected to my own homepage after login (/users/:id)
* The user homepage will have a left column list of My pets, My events, Create events, all events, add pet, all pets there will be a list of added events in the right of the page.
* When click on my pets, redirect to (/pets) and show all list of pets that the current user has.
* The user should be able to add pets by clicking a add pet button and redirect to (pets/new)(imgurl, breed, name, birthdate, funfact), the the user can click submit button to create new pet info and redirect to (/pets)
* Under each pet, there is a delete, and edit. When click on delete or edit, redirect to (/petspets/:id /edit)

* When user click on Create events, redirect to /events/new and show a form of event info( name, date, time,location,detail, img_url,create by)
* User can click submit to submit event and redirect to /user/:id/myevents
* User need to be able to delete/edit created events by clicking on delete button (redirect to /user/mypage/:id) and edit button(redirect to /events/:id/edit)

* when user click on All events, '/all' should appear and show all the events in database includes events from other user
* user can add other user's event by click on add event button under each event and redirect to (/user/:id/myevents)



###Bonus

* Use pet breed API to show pet photo.
* Search events from all events
