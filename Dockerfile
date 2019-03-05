FROM node:8

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

# Bundle app source
COPY package.json /src/app/
ADD public /src/app/public
ADD src /src/app/src

# Build
RUN yarn install && yarn run build && yarn global add serve

EXPOSE 80

# defined in package.json
CMD ["serve", "-p 80", "-s", "./build"]
