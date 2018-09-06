use tutorific_db;

INSERT INTO Subjects (subjectName,numOfSearches,createdAt,updatedAt)
VALUES ("Math",3,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Subjects (subjectName,numOfSearches,createdAt,updatedAt)
VALUES ("Science",1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Subjects (subjectName,numOfSearches,createdAt,updatedAt)
VALUES ("Engineering",1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Subjects (subjectName,numOfSearches,createdAt,updatedAt)
VALUES ("Social Work",1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Subjects (subjectName,numOfSearches,createdAt,updatedAt)
VALUES ("Arts",0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Subjects (subjectName,numOfSearches,createdAt,updatedAt)
VALUES ("Fine Arts",0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Subjects (subjectName,numOfSearches,createdAt,updatedAt)
VALUES ("Philosophy",0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Subjects (subjectName,numOfSearches,createdAt,updatedAt)
VALUES ("Architecture",0,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO TutorPosts (title,firstName,lastName,venmoName,subject,imageURL,description,hourlyRate,email,createdAt,updatedAt)
VALUES ("Fine Arts Tutor Right Hurr","Shaggy","N/A","scoobydoowashere@venmo.me","Fine Arts",
"https://i.imgur.com/akV19om.gif","Oh boi!! A New Case to solve, work with me and you'll find the culprit!",17.75,
"TestGuy1@example.com",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO TutorPosts (title,firstName,lastName,venmoName,subject,imageURL,description,hourlyRate,email,createdAt,updatedAt)
VALUES ("Science Tutor for Flat Earthers","Scotty","Does Know","scottydoesntknow@venmo.me","Science",
"https://i.imgur.com/CyCDhoP.jpg","You see because 'Aliens' the earth is flat. One tutor session and you'll agree!",20.23,
"TestGuy2@example.com",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO TutorPosts (title,firstName,lastName,venmoName,subject,imageURL,description,hourlyRate,email,createdAt,updatedAt)
VALUES ("Alchemist looking to make some gold","Edward","Elric","elricbrosrock@venmo.me","Science",
"https://i.imgur.com/olvye70.jpg","We need material for an 'equivalent exchange' trying to bring mother back...Available",12.50,
"TestGuy3@example.com",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO TutorPosts (title,firstName,lastName,venmoName,subject,imageURL,description,hourlyRate,email,createdAt,updatedAt)
VALUES ("Biology does the body good","Milk Man","Sam","milkmansam@venmo.me","Biology",
"https://i.imgur.com/2fUQhWX.jpg","Calcium the beautiful taste of Calcium my friends for three payments of 14.99 I can provide you with premium Milk (two cartons for free)",14.99,
"TestGuy4@example.com",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO TutorPosts (title,firstName,lastName,venmoName,subject,imageURL,description,hourlyRate,email,createdAt,updatedAt)
VALUES ("Let's Talk about Life","Chemisty","Cat","nolaughsforcats@venmo.me","Science",
"https://i.imgur.com/ymfmMik.jpg","You see I told a Chemistry Joke and nobody laughed. Dunno what the do about that but hey",8.00,
"TestGuy5@example.com",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO TutorPosts (title,firstName,lastName,venmoName,subject,imageURL,description,hourlyRate,email,createdAt,updatedAt)
VALUES ("Engineering made easy","Bob","TheEngineer","bobtheengineer@venmo.me","Engineering",
"https://i.imgur.com/ndS92ZS.jpg","I'll teach you how to create some amazing technology",10.00,
"TestGuy6@example.com",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("thisguyrighthere9000",3,"This guys lessons are OVER 9000!",
CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("reviewer2",2,"I dunno man, im not into this 'Fine Arts' thing, seems kinda weak",
CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("reviewer3",5,"Just doing a reivew, quality work here. moving on",
CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("anonymous",3,"He helped me stay anonymous....",
CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("beatmodeReviews",4,"Decent guy, those lessons were BEAST!",
CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("derptwitch.tv",4,"I'm a great gamer but im terrible at the 'Fine Arts' this guy helps quite a bit.",
CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);

INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("itwasdefinitelyaliens",5,"Good Lessons because...ALIENS!",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("natgeowasgood",4,"She taught me about the world and all the wonderous things",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("iregretthis",1,"I didn't learn alchemy but, oh god his Mother! His MOTHER!",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,3);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("MilkMan64",3,"That was good, learned about proteins and some new diets",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,4);
INSERT INTO Reviews (author,rating,text,createdAt,updatedAt,tutorPostId)
VALUES ("catlover4u",4,"Came for the cats stayed for the silly memes",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,5);
