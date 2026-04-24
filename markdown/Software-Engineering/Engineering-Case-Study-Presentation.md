# Real-world Engineering Case Study Presentation

*This assignment is under construction and is subject to change for the 26-27 school year.* 

## Objective
1. Reasearch a company's software stack to understand their overall system design, how the system handles millions of users, the trade-offs between specific architecture, and how the company's software has evolved to their current scale.
2. Develop an effective and informative presentation. 

### Presentation Examples

As you watch the following videos, write down qualities of strong and weak presentation skills in each of the categories on [this graphic organizer](https://docs.google.com/document/d/1vcl8G_qbv04BXPm1noMnL96bCEI7RcapvP-hRgH37_M/edit?usp=sharing).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/ATfY8dvbuFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You do not need to watch this entire video, but watch at least the first 10 minutes. 
<iframe width="100%" height="400" src="https://www.youtube.com/embed/x6TsR3y5Qfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Your Task

Your task is to reaserach the software stack of a major company and create a presentation explaining it to the rest of the class.

### Select a Company to Research 

1. Netflix: The gold standard for Microservices, AWS cloud migration, and "Chaos Engineering" (intentionally breaking things to test resilience).
2. Uber: Excellent for understanding geospatial data processing, real-time dispatch systems, and transitioning from a monolithic application to thousands of microservices.
3. Discord: A masterclass in handling massive concurrent connections (WebSockets) and database migrations (e.g., their famous shift from MongoDB to Cassandra, and later to ScyllaDB).
4. Spotify: Great for researching Content Delivery Networks (CDNs), audio streaming protocols, and their unique organizational architecture ("Squads and Tribes").
5. Shopify: A rare and excellent example of a massive, highly successful Monolithic architecture (Ruby on Rails) that challenges the "microservices solve everything" narrative.

### Required Sections

1. The Business Context & Problem Domain
    1. What does the company do?
    2. What are their primary technical constraints? (e.g., low latency for gaming, high availability for payments, massive data volume for video streaming).
2. High-Level Architecture (The "Big Picture")
    1. A system architecture diagram showing the flow of data from the user to the backend.
    2. Identification of the core architectural pattern (Event-driven, Microservices, Monolith, Serverless).
3. The Tech Stack & Infrastructure
    1. What languages, frameworks, databases, and cloud providers do they use?
    2. Crucially: Why did they pick them? (e.g., "They use Go for its concurrency handling and Redis for sub-millisecond caching.")
4. A Deep Dive into a Specific Challenge
    1. Students should pick one hard problem the company faced and explain how they solved it. (e.g., How Twitter handles the "Celebrity Problem" where a single tweet from a massive account causes a read/write spike).
5. Critique and Takeaways
    1. What did the students learn?
    2. Are there any flaws or massive costs associated with this architecture?
6. Citations

## Where to Research

1. Company Engineering Blogs: Almost all major tech companies have dedicated engineering blogs (e.g., Netflix TechBlog, Uber Engineering Blog).
2. Conference Talks: YouTube is full of presentations from conferences like AWS re:Invent, QCon, and Strange Loop where engineers explain their systems.
3. Aggregator Sites: Websites like High Scalability or InfoQ have fantastic, detailed breakdowns of company architectures.


