### Initial Setup

Before running the application for the first time, make sure to follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/benitez96/psh-challenge.git
   ```


2. Navigate to the project directory:

   ```shell
    cd psh-challenge
   ```

3. Run the following command to build and start the Docker containers:

   ```shell
    docker-compose up -d
   ```
4. Apply database migrations:

   ```shell
    docker-compose exec server python manage.py migrate
   ```

5.  Populating the Database
Before using the API, you need to populate the database with some players. You can do this by running the following command:

   ```shell
    docker-compose exec server python manage.py populate_players
   ```
### Accessing the API
Once you have configured and populated the database, you can access the API via Swagger at the following URL: [Open swagger](http://localhost:8000/swagger)


### Accessing Web App
Now you can open the [website](http://localhost:3000)

