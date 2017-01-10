# Dockerfile.alpine-mini
FROM index.tenxcloud.com/docker_library/node:argon

# Create app directory and bundle app source
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Install node.js and app dependencies
RUN echo '@edge http://nl.alpinelinux.org/alpine/edge/main' >> /etc/apk/repositories \
  && apk update && apk upgrade \
  && apk add --no-cache nodejs-lts@edge \
  && cd services \
  && npm install pm2 -g \
  && npm install \
  && npm uninstall -g npm \
  && rm -rf /tmp/* \
  && rm -rf /root/.npm/

# Expose port
EXPOSE 8099

# Start service
RUN NOD_ENV=development pm2 start index.js --name bch-api -i 0
