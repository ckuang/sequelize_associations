# Sequelize Associations

## Making our own JOIN table
On Github, there are a lot of repositories. These repositories in turn have a lot collaborators or users. Users can have multiple repositories. This association is a many-to-many relationship. Construct a JOIN table that has one foreign key column => userID and another foreign key column => projectID.

## Making a self JOIN table
One of the main features of many social media outlets is the ability to "follow" or "friend" other users. In SQL, this is called a self-join table because the JOIN table has one foreign key column => userID and another foreign key column that also points userID.
