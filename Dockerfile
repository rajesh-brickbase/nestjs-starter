# same version as AWS Lambda
FROM node:13.3.0

WORKDIR /app
COPY . .
ENV NODE_ENV=development

RUN npm install

RUN npm build

# run app
CMD ["node", "./dist/main.js"]
