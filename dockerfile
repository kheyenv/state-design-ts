FROM node

COPY . /home/user/work

WORKDIR /home/user/work

ENV NODE_ENV=test

RUN yarn clean-all && \
    yarn install && \
    yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]