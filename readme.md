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
