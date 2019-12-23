My goal was to implement search to surface the most relevant Ted Talks.

I indexed the Ted Talk data based on the following attributes: speakers, name, description, event name, and tags. I ranked based on scores, prioritizing popularity score and view count, followed by more sensational ratings like 'jaw-dropping', then the additional ratings.

server.js isn't used directly in the app now that we are using gh-pages, but I used it to initialize and update the search settings, and test out the queries.

I used basic InstantSearchJS to create the search UI. I created widgets for the search box, hits, and pagination.



------------------------------

Question 1: Hello,
I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
* Records
* Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."
Cheers, George

Hello George,

Records are the data entities that you can set up to be indexed and searched by their attributes. For example, a song record would be:
{'id': '123', 'title': 'Santa Baby', 'artist': 'Eartha Kitt', 'year': '1953', 'views': 2948492}, and the attributes would be the id, title, and artist.

Indexing is the process of parsing, organizing, and storing the records by specific attributes so that they can be searched and quickly retrieved.

Custom ranking is a way to ensure that the search results surface the most relevant records. If there are two records that both meet the same results, ranking provides a "tie-breaker" to determine which record is seen first. For example, a user may search for the song "Santa Baby", and there may be several versions of the song. If you want to search for the most listened-to version, you might rank by 'views'. However, this may down-rank a newer version of the song. Alternatively, you may rank by both the 'views' and the 'year' recency of the song.

Let me know if you have any other questions. We want to make your onboarding as smooth as possible.

Thanks,
Debanshi

----------

Question 2: Hello,
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.
Regards, Matt

Hi Matt,
We value your feedback - thank you for taking the time to share it with us. Can you please elaborate on the process you are going through to iterate on your indexes? I want to understand exactly where your pain points are so that we can relay to our product team.
Thanks,
Debanshi

----------

Question 3: Hi,
I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?
Regards, Leo 

Hi Leo,

The basic integration is simple, though more development work could be required to implement more advanced features. 

To get started, the process is to:
-send your records to Algolia servers and index the data
-optimize search results by configuring the indexes and rankings, using the UI or through simple code
-build a search UI, optionally using Algolia's InstantSearch UI components

We provide software and tools to help you implement search with minimal development work required, and support a number of languages and frameworks. We also have a UI that allows Algolia to be configured by a business user. Please let me know what your stack looks like today, and I can send you more details about how we can integrate into your existing code base.

Thanks,
Debanshi
