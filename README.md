# Hackathon: QuickHealth

This project was created for the [Facebook Messenger 2020 Hackathon](https://fbmessaging2.devpost.com/?ref_content=online-hackathons&ref_feature=challenge&ref_medium=facebook-channel)

The concept is to use quick replies to help users down journeys to administer simple first aid. I chose a few simple scenarios especially for living alone I think its important having sources of first aid to hand.

⚠️ As noted in the journeys the first aid has been researched but is written in for demo purposes and this app will remain in demo mode so people cannot use it for real purposes.

## Tech Approach
The app is written in node and uses the `payload` value of the quick replies to point to next part of the journey, so there is no need for state management within the application, also turning the text input off means the consumer cannot go down the wrong route.

## Local run
- If you wanted to run this project create a `.env` file with the values in `.env.example` you will have to [setup a facebook page](https://developers.facebook.com/docs/messenger-platform/getting-started)

- Run a docker build

- Then run this docker image using the `.env` file
```
docker run --env-file .env -p 3000:3000 <IMAGE_NAME>
```

- You will probably have to use a service such as ngrok to https route to the local machine.