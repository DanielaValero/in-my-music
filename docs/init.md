## Initial ideas

The main idea of the app is to be a web browser app, made with whatever tech I decide, to practice, and learn full software design, and product design. At my own pace, with or without help of others. To have my own thing that I grow over time.

It would solve my need of:
- Finding new music
- Finding something in my music sources, according to: mood, genre, ocassion, rather than only by title of playlist, artist name or album. 
- Recommend and promote alternative, indie-web-like, new music, new music sources (ie: flow state, fip radio, etc)
- Find in those whatever they are playing

Tech
- Some web framework
to learn:
- Rust/Go/Clojure/Rest/Python
- Docker/k8s/kafta and all that lingo
- Open source


### Music streaming APIS
https://rapidapi.com/search/music

[Shazam](https://rapidapi.com/apidojo/api/shazam) - Best for Identifying Songs & Music Recognition

[TheAudioDB](https://rapidapi.com/theaudiodb/api/theaudiodb) - Best for All Around Song & Music Video Data

[Spotify](https://rapidapi.com/search/spotify) Best for Music Metadata & Playlists

[LastFM](https://rapidapi.com/search/music) - Best for Metadata, Charts & Cover Art

[30,000 radio stations and music charts](https://rapidapi.com/maxime.maisonneuve/api/30-000-radio-stations-and-music-charts) Best for Radio Station Data

https://jonasrmichel.github.io/radio-garden-openapi/


### Features
- Search by mood, genre, ocasion
- Search in spotify, radios
- Get info of current song (artist etc)
- Sort playlists by genre
- Web player
- Music inspiration:
	- online magazines?


## Architecutre
**Goal**: event-driven, serverless application

### Frontend
What are the standards nowadays for a react app?
- React, TS, Jest
- Data fetching: Replay? SWR? https://relay.dev/ - https://swr.vercel.app/
- State management: ?
- UI library: antd?

### Deployment framework
Serverless framework: CLI that allows you to design, deploy, debug, and protect serverless apps

## Node Frameworks
- **https://nestjs.com/**
- GraphQL ? 

### Serverless Cloud platform
- Lambda AWS -> Event driven serverless computing platform
  - Alternative: Lambda Netlify
- https://www.serverless.com/ framework to manage the app

### NoSQL Database
Question: What type of NoSQL do I need? -> https://aws.amazon.com/nosql/
https://cloud.netapp.com/blog/aws-cvo-blg-aws-nosql-choosing-the-best-option-for-you

- DynamoDB: Propietary NoSQL database service that supports key-value and document data formats


### Boilerplates
- https://github.com/arabold/serverless-react-boilerplate
- 

## Tasks
[] Finish AWS registration
[] Create AWS key -> https://www.serverless.com/framework/docs/providers/aws/guide/credentials#create-an-iam-user-and-access-key
[] Follow tutorial: https://blog.logrocket.com/building-serverless-app-typescript/
[] Github actions