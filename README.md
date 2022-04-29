# nextjs-from-scractch

#### What is nextjs
- the react framework for production
- help to build large scale ready react apps easier
- is call framework because it have a lots of built-in features (e.g. routing) that help you solve common problems & clear guidance on how to use those features
    - you still write react code, you still build react components and use React features ( props, state, context,...)
    - there are certain problems which you will need to solve for almost all production-ready React apps: Nextjs solve those for you

#### Nextjs feature concepts

##### server-side rendering
- prepare the content page on the server, instead on the client
- initial problem:
    - an app build with just reactjs is pretty empty on the start (basic html skeleton with and entry point like `<div id="root"></div>`) into that the react app is loaded and rendered
    - but all that rendered is done by react which is a client-side javascript library. So all that rendering happens on the client (browsers of your users)
    - if your app always fetch data from server, the user might initially see some loading state for a fraction of second, because the page do not containt yet that data. It might not be the user experience you want to offer. exemple for search engine optimization, referencement
    - reactjs has built-in features `ReactDomServer` that allow you to add server-side rendering, but it can be tricking to get it write, and it requires extra setup
- solution:
    - nextjs has built-in server side rendering, that automatically pre-rendering your pages (react components). It is great for SEO and initial load (because engine like google search engine, see why our user see + user have a better initial load experience because they don't have that initial flickering)

##### File-based Routing
- setup routing the must easier way 

- initial problem:
    - in app built with reactjs we have and illusion of routing with `react-router` ( it watch some url , and when it changes it basically prevent a browser default of sending a request to some backeng server and instead render different content on the page with react)
    - routing is setup on code
- solution
    - which nextjs you define pages and routes with files and folders, instead of code
    - less code, less work and highly understandable

##### Fullstack reactapp
- easily add backend  (server-side code) to your nextjs/ react app using nodejs code. example : storing data to a database, adding authentication ...