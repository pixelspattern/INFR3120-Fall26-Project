GymBuddy – INFR3120 Fall 2026 Project
Course: INFR3120U – Web and Scripting Programming
Team Members: Matthew Kiprenko, Rohaan Khan, and Mariam Rasheed

Live Website: https://infr3120-fall26-project-kyas.onrender.com

GitHub Repository: https://github.com/pixelspattern/INFR3120-Fall26-Project

Introduction
GymBuddy is a workout tracking web application that helps users record and keep track of their workout sessions in one place. Many people record their workouts using scattered notes or rely on memory, which can make it difficult to monitor their activity and stay consistent. GymBuddy provides a central place where users can record the type of workout they completed, the date, duration, intensity, and any additional notes.
The main goal of GymBuddy is to make workout tracking simple and organized. Users can open the website, select the Log a Session option, enter their workout information, and save it to the database. The homepage displays previously saved workout sessions in a table, allowing users to review their activity. This first release includes the main landing page, workout session creation, MongoDB database integration, and dynamic session display. The project can be expanded with additional features in future releases.

Technologies Used
The following technologies and tools were used to develop GymBuddy:
- Node.js: JavaScript runtime used to run the application.
- Express.js: Web framework used to create the application and manage routes.
- Express Generator: Used to generate the initial Express project structure.
- EJS: Template engine used to display dynamic website content.
- MongoDB Atlas: Cloud database used to store workout session records.
- Mongoose: Used to connect the Express application to MongoDB and define the workout session model.
- dotenv: Used to load environment variables and protect database credentials.
- HTML: Used to structure the website pages and form.
- CSS: Used to style the website and create responsive layouts.
- Bootstrap 5.3.3: Used through its CDN for additional styling support.
- Git and GitHub: Used for version control and group collaboration.
- Render: Used to deploy the website online.

Project Structure
The project was created using Express Generator with EJS as the view engine. The main folders and files are organized as follows:
INFR3120-Fall26-Project
| 
|-- bin
|   |-- www
|
|-- config
|   |-- database.js
|
|-- models
|   |-- Session.js
|
|-- public
|   |-- images
|   |   |-- logo.png
|   |
|   |-- stylesheets
|       |-- style.css
|
|-- routes
|   |-- index.js
|   |-- sessions.js
|   |-- users.js
|
|-- views
|   |-- partials
|   |   |-- footer.ejs
|   |   |-- header.ejs
|   |
|   |-- error.ejs
|   |-- index.ejs
|   |-- new-session.ejs
|
|-- .env
|-- .gitignore
|-- app.js
|-- package-lock.json
|-- package.json
|-- Project Group responsibilities.docx
|-- README.md

(The .env file is created locally and is not included in the public repository because it contains private database credentials.)

Main Folders and Files

bin/www
This file starts the Express application and creates the HTTP server. It also handles the application port. The project uses the environment provided PORT when available and uses port 3000 as the local default.

config/database.js
This file manages the connection between the application and the MongoDB Atlas database. It uses Mongoose and reads the database connection string from the MONGODB_URI environment variable. A successful connection displays a confirmation message in the terminal, while connection errors are displayed in the terminal.

models/Session.js
This file contains the Mongoose schema and model for workout sessions. It defines the information that can be stored for each session and includes validation rules for required fields and permitted values.

public/images/
This folder stores the website’s image files, including the original GymBuddy team logo.

public/stylesheets/style.css
This file contains the custom CSS used to style the website. It controls the header, navigation, homepage hero section, sessions table, form, buttons, footer, and responsive layouts for different screen sizes.

routes/index.js
This file contains the homepage GET route. It retrieves workout sessions from MongoDB, sorts them by date with the newest sessions first, and sends the results to the homepage EJS view.

routes/sessions.js
This file handles the workout session form routes. It displays the Log a Session page through a GET route and processes submitted workout information through a POST route. It validates the submitted information and saves valid sessions to MongoDB.

routes/users.js
This file was automatically created by Express Generator. It contains a basic /users route that displays a placeholder response. It is not currently used for GymBuddy’s main features.

views/partials/header.ejs
This partial contains the shared HTML document structure, page title, Bootstrap stylesheet link, custom CSS link, GymBuddy logo, site name, and navigation links. It is included in the website’s pages to keep the header consistent.

views/partials/footer.ejs
This partial contains the shared footer. It displays the project copyright information, team members, and a link to the GitHub repository.

views/index.ejs
This file displays the homepage. It contains the hero section, Log a Session button, and Recent Sessions table. It uses EJS to display workout records retrieved from MongoDB.

views/new-session.ejs
This file contains the Log a Session form. Users can enter their workout details and submit the form to save a new session.

views/error.ejs
This file displays error information when an application error occurs.

app.js
This is the main Express application file. It loads environment variables, connects to the database, configures EJS, enables middleware, serves static files, and connects the application’s routes.

package.json and package-lock.json
These files contain the project’s dependencies and package information. The package.json file also includes the start command used to run the application.

.env
This file stores the MongoDB connection string as an environment variable. It is not committed to GitHub because it contains private database connection information.

.gitignore
This file prevents files and folders such as node_modules/ and .env from being added to the Git repository.

Project Group responsibilities.docx
This document contains the project idea and the responsibilities assigned to each group member for Project Part 1.

Main Website Features

Homepage
The homepage introduces GymBuddy and explains its main purpose. It includes the GymBuddy name and original team logo in the header, along with navigation links for Home, Sessions, and Log a Session.
The hero section displays the message:
“Track every workout in one place.”
It also includes a short description explaining how users can record their workouts and review their recent activity.
The + Log a Session button takes users directly to the workout entry form.

Log a Session Form
The Log a Session page allows users to enter information about a completed workout.
The form includes the following fields:
- Workout Type: Users can select Cardio, Running, Weight Training, Boxing, Yoga, or Other.
- Date: Users select the date of their workout.
- Duration: Users enter the workout duration in minutes.
- Intensity: Users select Low, Medium, or High.
- Notes: Users can enter additional information about their workout.
The form uses HTML required field validation and additional server side validation in the POST route.
After valid information is submitted, the application creates a new workout session and saves it to MongoDB. A success message is displayed after the session is saved.

Recent Sessions
The homepage contains a Recent Sessions section that displays workout records retrieved from MongoDB.
Each record displays the date, workout type, duration, intensity, and notes.
The table displays records retrieved from the database rather than hardcoded example information.
The sessions are sorted by date in descending order, meaning the newest workout sessions appear first.
If the database does not contain any workout sessions, the homepage displays an empty state message encouraging users to log their first workout.

MongoDB Database Integration
MongoDB Atlas was used as the cloud database for GymBuddy. The database stores workout session information so that records remain available when users return to the website.

Database Setup
A MongoDB Atlas cluster named GymBuddyCluster was created for the project. Database access and network access were configured, and a database named GymBuddy was created.
Mongoose was installed and used to connect the Express application to MongoDB Atlas.

The required packages were installed using:
npm install mongoose
npm install dotenv

Database Connection
The database connection is managed through config/database.js.
The connection string is stored in an environment variable named MONGODB_URI. The dotenv package loads this variable when the application starts.

The application uses the following code to connect to MongoDB:
mongoose.connect(process.env.MONGODB_URI)
When the connection succeeds, a confirmation message is displayed in the terminal.

Session Schema
The workout session schema is defined in models/Session.js.

Each session contains the following fields:
- type: String. Stores the workout category.
- date: Date. Stores the date of the workout.
- duration: Number. Stores the workout duration in minutes.
- intensity: String. Stores the workout intensity level.
- notes: String. Stores optional additional information about the workout.

The schema includes validation rules:
- Workout type is required and must match one of the available workout categories.
- Date is required.
- Duration is required and must be at least 1.
- Intensity is required and must be Low, Medium, or High.
- Notes are optional and have extra whitespace trimmed.
This helps maintain consistent information for workout records.

Protecting Database Credentials
The MongoDB connection string is stored in the .env file rather than being written directly into the application code.
The .gitignore file includes:
node_modules/
.env
This prevents the private connection string from being uploaded to the public GitHub repository.
For deployment, the MONGODB_URI variable is configured in the Render environment settings instead of relying on the local .env file.

Application Routes
The application uses Express routes to display pages and process workout information.

GET /
Retrieves workout sessions from MongoDB and displays the homepage.

GET /sessions/new
Displays the Log a Session form.

POST /sessions
Validates the submitted workout information and saves a new workout session to MongoDB.

GET /users
Default Express Generator users route that displays a placeholder response.

Retrieving Workout Sessions
The homepage route is located in routes/index.js.
It uses the following Mongoose query:
Session.find().sort({ date: -1 })
Session.find() retrieves the workout session records from MongoDB. The .sort({ date: -1 }) part sorts the records by date in descending order.
The retrieved sessions are passed to index.ejs, where EJS displays them in the Recent Sessions table.

Creating Workout Sessions
The POST route is located in routes/sessions.js.
When the user submits the Log a Session form, the route receives the submitted information through req.body.
The route checks that the required fields are completed and validates the workout type, intensity, duration, and date.
After the information passes validation, a new Session object is created and saved using:
newSession.save()
This stores the workout record in MongoDB. The application then displays a success message.

Responsive Design
CSS media queries are included to adjust the layout for different screen sizes.
The stylesheet includes:
- Tablet layout: For screens between 481px and 959px.
- Mobile layout: For screens up to 480px.

Deployment
GymBuddy was deployed using Render so that the application can be accessed online.
The GitHub repository was connected to Render, and the application was configured to run using the start command in package.json.
The MongoDB connection string was added to the Render environment variables using MONGODB_URI. This allows the deployed application to connect to MongoDB Atlas without storing the database credentials directly in the source code.

Group Contributions

Member 1: Matthew Kiprenko
GitHub: pixelpatterns
- Created the public GitHub repository and added all group members as collaborators.
- Wrote the project description and group contribution document.
- Uploaded the project documentation to the repository.
- Set up the initial Express and EJS project structure.
- Created the landing page layout, website name, hero button, and navigation.
- Created the shared header and footer partial views.
- Created the homepage and initial routes.
- Designed the original GymBuddy team logo.

Member 2: Rohaan Khan
GitHub: Rohaan-666
- Built the Log a Session form page, including workout type, date, duration, intensity, and notes.
- Created the POST route to receive and validate workout form submissions.
- Created the initial GET route for the homepage.
- Added website styling and basic input validation.
- Created and styled the original Recent Sessions table on the homepage.
- Tested the Log a Session form and its submission process.

Member 3: Mariam Rasheed
GitHub: Mariam-Rasheed13
- Set up MongoDB Atlas and created the GymBuddyCluster cluster.
- Configured database access and network security.
- Created the GymBuddy database.
- Configured the MongoDB connection using Mongoose.
- Created the .env file to securely store the MongoDB connection string.
- Updated .gitignore to prevent private database credentials from being uploaded to GitHub.
- Created config/database.js to manage the database connection.
- Created models/Session.js and defined the workout session schema.
- Updated the GET route in routes/index.js to retrieve workout sessions using Session.find().
- Configured retrieved sessions to be sorted by date, with the newest sessions appearing first.
- Updated views/index.ejs to display actual MongoDB records in the Recent Sessions table.
- Implemented dynamic session display using EJS.
- Added an empty state message for when no workout sessions are available.
- Tested the MongoDB connection and verified successful database connectivity.
- Tested session retrieval and confirmed that saved workout records appeared on the homepage.
- Deployed the application to Render and configured the required environment variables.
- Checked the live website and its main functionality.
- Prepared the README file.

External Resources and References
The following external resources were used as part of the project:
- Express.js: https://expressjs.com/
- Express Generator: https://expressjs.com/en/starter/generator.html
- EJS: https://ejs.co/
- MongoDB Atlas: https://www.mongodb.com/products/platform/atlas-database
- Mongoose: https://mongoosejs.com/
- dotenv: https://www.npmjs.com/package/dotenv
- Bootstrap 5.3.3: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Render: https://render.com/