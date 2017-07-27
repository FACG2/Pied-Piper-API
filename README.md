# Pied-Piper-API
### A Movies Database search engine
>Simple movies search page based on using API's. 

#### about the site:
The basic idea of the site is to write the movie's name you want to search for,
after clicking search, the information of all the possible results will be grabbed and
appear as a search results 
when you choose any Movie you want, the page will be updated with all the movie's details which includes:
  1. The movies description
  2. The movies rating.
  3. The movie's trailer.
  4. The movie's casting.

 
### Structure of files: 
1. Index.html "The main page".
2. style.css "page style"
3. Api_requests.js "main functions and DOM"

### How does it work ? 
1. When the user type the name of the movie and choose to search, a request to Movies Data base API is sent and the response presents all the matching movies. 
2. The user choose his desired movie to get information about. 
3. All the data of the movie appeared in the page and the movie id is passing to another request to Movies Data base to get the cast details (image, name .. ). 
4. In the same time the movie title is passed to the lase request to YouTube API to get the Movie trailer. 

### How did we manage the to Split the Work:
 - We defined the main page functions and split the work so that each member can work on a specific feature or part like:
   + Two works on defining the API requests and handle data flow and shape, 
   + One works with the DOM file, 
   + One design the html form.
 
### Problems we faced : 
   > Splitting the work : All the code parts are dependant on each others so that we couldn't split the code parts properly.

### PUBLISHED [HERE]()
###### The project is done by:
        Eslam, Qamar, Mahmoud and Kefah
