# Database Design

## Objective
1. Learn how to build robust, scalable databases
2. Practice converting the real world into a database format
3. Write professional and effective data documentation

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| business rules |  Brief, precise descriptions of policies or constraints that govern how an organization views and manages its data.  They bridge the gap between real-world operations and technical database design | 
| use case | a structured, step-by-step description of how an actor interacts with a software application to achieve a specific goal |
| entity relationship diagram | a type of flowchart that illustrates how “entities” such as people, objects or concepts relate to each other within a system | 
## Your Task

Here is the prompt:
> I am the manager of the Happy Paws Animal Shelter. Right now, I track all our animals and the people who adopt them in a messy spreadsheet, and it's causing errors. I need you to design a database for me.

> Right now I have two spreadsheets pet_data.csv and adoption_data.csv. The first has the following columns: pet_name, pet_species, pet_breed, arrival_date. The second has the following columns: adopter_name, adopter_phone, pet_name, pet_species, pet_breed, status, adoption_date. I add a new row to the first when I get a new pet and I add a new row to the second when they are adopted. 

<details>
<summary>Click here to view `pet_data.csv` </summary>
```
pet_name,pet_species,pet_breed,arrival_date
Bella,Cat,Sphynx,2024-03-02
Max,Dog,Shepherd,2025-11-13
Luna,Cat,Sphynx,2024-11-13
Charlie,Cat,Sphynx,2024-11-20
Lucy,Cat,Ragdoll,2025-01-13
Cooper,Cat,Siamese,2025-12-30
Daisy,Cat,Persian,2025-02-18
Milo,Cat,Bengal,2024-09-28
Lola,Cat,Sphynx,2025-11-10
Rocky,Cat,Siamese,2024-08-19
Sadie,Dog,Shepherd,2025-08-21
Buddy,Dog,Shepherd,2025-04-04
Molly,Dog,Boxer,2024-02-19
Bear,Cat,Ragdoll,2024-01-31
Bailey,Cat,Maine Coon,2024-10-13
Tucker,Cat,Maine Coon,2024-06-27
Zoey,Dog,Bulldog,2024-04-27
Duke,Cat,Ragdoll,2024-01-23
Chloe,Dog,Labrador,2025-11-09
Jack,Cat,Bengal,2025-11-21
Lily,Cat,Sphynx,2024-06-18
Oliver,Cat,Siamese,2024-09-14
Ruby,Dog,Bulldog,2025-02-24
Leo,Dog,Bulldog,2025-12-07
Rosie,Cat,Persian,2025-06-10
```
</details>

<details>
<summary>Click here to view `adoption_data.csv` </summary>
```
adopter_name,adopter_phone,pet_name,pet_species,pet_breed,status,adoption_date
Alex,555-0100,Bella,Cat,Sphynx,Pending,2025-11-12
Jordan,555-0101,Max,Dog,Shepherd,Pending,2025-07-24
Taylor,555-0102,Luna,Cat,Sphynx,Pending,2024-11-26
Morgan,555-0103,Charlie,Cat,Sphynx,Returned,2024-01-08
Casey,555-0104,Lucy,Cat,Ragdoll,Adopted,2025-05-12
Riley,555-0105,Cooper,Cat,Siamese,Adopted,2024-05-04
Jamie,555-0106,Daisy,Cat,Persian,Adopted,2024-03-31
Avery,555-0107,Milo,Cat,Bengal,Returned,2025-06-11
Quinn,555-0108,Lola,Cat,Sphynx,Adopted,2025-01-06
Parker,555-0109,Rocky,Cat,Siamese,Adopted,2025-10-21
Drew,555-0110,Sadie,Dog,Shepherd,Pending,2025-03-20
Reese,555-0111,Buddy,Dog,Shepherd,Returned,2025-05-03
Skyler,555-0112,Molly,Dog,Boxer,Adopted,2024-03-05
Rowan,555-0113,Bear,Cat,Ragdoll,Returned,2024-04-05
Hayden,555-0114,Bailey,Cat,Maine Coon,Adopted,2024-05-20
Blake,555-0115,Tucker,Cat,Maine Coon,Returned,2025-06-05
Cameron,555-0116,Zoey,Dog,Bulldog,Pending,2025-06-14
Dakota,555-0117,Duke,Cat,Ragdoll,Pending,2025-01-22
Emerson,555-0118,Chloe,Dog,Labrador,Adopted,2025-11-02
Finley,555-0119,Jack,Cat,Bengal,Returned,2024-08-13
Harper,555-0120,Lily,Cat,Sphynx,Adopted,2025-01-20
Kendall,555-0121,Oliver,Cat,Siamese,Adopted,2024-07-22
Logan,555-0122,Ruby,Dog,Bulldog,Adopted,2025-08-30
Micah,555-0123,Leo,Dog,Bulldog,Adopted,2024-06-06
Sawyer,555-0124,Rosie,Cat,Persian,Adopted,2025-03-09
```
</details>



1. Create a new folder for this project. Inside, create a `README.md` for your planning. **You DO NOT need to create an actual database for this assignment, but you can use the data to create one if you want to!**

2. First, we will define the **business rules** for the system. What is true about our data? Add the rules to your document. Here are some possible types of rules. 
    - Structural Rules: Define how data elements interrelate (e.g., "One artist may create many songs")
    - Integrity Constraints: Hard rules that prevent invalid data from entering.
        - Field Constraints: Restrict values in a single column (e.g., a "shipping date" cannot be before the "order date").
        - Relationship Constraints: Ensure links between tables are valid (e.g., an invoice cannot exist without a linked customer).
    - Derivation Rules: Define how new facts are calculated from existing data (e.g., "Total Order Amount = Sum of detailed items").

3. Next, we need to define the **use cases**. These are typically in the form "As a [USER], I need to [ACTION]". You hear from the client that they need to do the following tasks. Turn these into user stories and add them to your document.
    - I need to be able to track current and adopted pets
    - I need to be able to access and modify owner information


4. Now that we know what rules our database must follow and what it needs to do, we will design our database tables. Should we put everything in one table? Why or why not?


<details>
<summary>Click here to view the answer </summary>

This is a bad idea. In this model if one person adopts three cats, their name and phone number will be listed three times. If we want to change it, we would have to change it in three places!

</details>


Instead we will create an **entity relationship diagram** to help us plan our database.

### Entity-Relationship Diagrams 

5. Open a new Google Drawing or [Excalidraw](https://excalidraw.com/) or [Lucidchart](https://www.lucidchart.com/pages) for your ERD. 

6. We'll start by identifying our core entities or nouns for our system. What three nouns represent our data best and what are their attributes? Add these to your diagram.

For example, if I wanted to create a ERD for a `Order` with the attributes `Order_Id`, `Customer_Id`, `OrderDate`, and `Price` and a `Customer` with the attributes `FirstName`, `LastName`, `Customer_Id`. 


<img src="/assets/database-design-figure-1.png">


For your own clarity, this is an example of an ERD in **Crow's Foot** notation. See [this article](https://medium.com/@callista.m.azizah/crows-foot-erd-for-beginners-a-tutorial-1effc8a326c6) for more information.

7. Make sure you highlight each table's primary key. A primary key needs to be a unique value! Typically the primary key is an id number or another unique value. Also identify the foreign keys as they appear in other tables. Lastly, make sure your lines have cardinality relationships labeled! 

8. Make sure this design maintains our business rules and supports all of the necessary use cases. You should be able to write a query for each of the use cases. Think through each and how the tables would be updated. 

## Designing a Data Dictionary

Now that you designed the system, we can create the appropriate documentation. 

9. Create a new document for your data dictionary. [Here](https://public.tableau.com/app/sample-data/GBBO_Data_Dictionary.pdf) is a sample from a preivous lab. Start by writing a small description of your project overall. Then add your diagram you created in the previous steps. Then for each table in your database, create the following table:

| Column Name | Data Type | Constraints | Description|
| ----------- | ----------- | --- | --- | 

Constraints can identify things like the column being a primary key, non-null, etc. Make sure these rules help maintain the constraints you listed above. 

10. Please proofread your work! Pretend like you are going to hand a client this data documentation for their business. You want others to be able to read and understand how your database functions easily. 

## Deliverables Checklist
- [ ] A file containing your buisness rules and use cases
- [ ] A containing your data dictionary

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.
