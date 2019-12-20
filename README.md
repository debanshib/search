My goal was to implement search to surface the most relevant Ted Talks.

I indexed the Ted Talk data based on the following attributes: speakers, name, description, event name, and tags. I ranked based on scores, prioritizing popularity score and view count, followed by more sensational ratings like 'jaw-dropping', then the additional ratings.

server.js isn't used directly in the app now that we are using gh-pages, but I used it to initialize and update the search settings, and test out the queries.

I used basic InstantSearchJS to create the search UI. I created widgets for the search box, hits, and pagination.
