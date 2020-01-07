# same version as AWS Lambda
FROM node:13.4.0-buster-slim

WORKDIR /ingest-app

COPY package.json /ingest-app

RUN npm install

COPY . /ingest-app

ENV NODE_ENV=development

RUN npm run-script build

# run app
CMD ["node" , "./dist/main.js"]

