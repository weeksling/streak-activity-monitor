# Welcome to my Streak - GeckoDashboard integration
## How it works
This is a very simple implementation which will run a data fetch on initialization, and then again every 12 hours until stopped.

The app simply performs a single get request against the Streak API in order to fetch data regarding existing boxes (leads/projects in the CRM). Once data fetch is completed, it then send this data immediately to the GeckoBoard API as a new dataset for visualization.

In the event that I were to track more information than just boxes, I might perform additional fetches, and build several datasets, or even add to the existing dataset if necessary.

## Goal
My goal in this dashboard was simply to track one key metric (number of unique leads being added to the CRM over time). 

In addition, I am tracking the number of emails being sent vs the number of emails being received, by day. I did this to see how I might track differences over time, but I could not figure out away to do this. Unfortunately, this results in an accumulative graph only, which I believe is less useful. This is more of a team performance metric, as opposed to a general KPI though, so I imagine that it is outside of the intentions of Geckoboard.

## Technology
The language used here is javascript. I used NodeJS because it is simple to set up, and also quite portable.
The tooling used is quite basic. Rather than implement a build process, I simply set the system up to utilize npm's start script. If this project were to become more complicated, a build process like gulp may have been useful down the line.

I also chose not to implement tests, as the project is very simple. If I were to continue to extend the functionality for more generalized use, then tests would be extremely useful.


# Initialization
In order to run this project, you will need to set the appropriate environment variables. For now, these must be set by creating a .env file.
This file will use the following format (You will replace the actual values with the values for your accounts)

```env
STREAK_API_KEY = 'YOUR_API_KEY'
GECKO_API_KEY  = 'YOUR_API_KEY'
```

Once this set up is completed, you can run the project with the following:

```bash
npm start
```

This will launch the primary application, and start up a cron job which will regularly check the Streak API for updates.
