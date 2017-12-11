# Builds production version of tc-bus-api inside Docker container,
# and runs it against the specified Topcoder backend (development or
# production) when container is executed.

FROM node:8.2.1
LABEL app="tc-bus-api" version="1.0"
RUN apt-get update
WORKDIR /opt/app
COPY . .
RUN npm install
ENTRYPOINT ["npm", "start"]