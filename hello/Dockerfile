FROM node:20.15.0-alpine3.20

WORKDIR /hello

ADD src /hello/src

ADD entrypoint.sh /hello

ADD package.json /hello

RUN yarn install 

RUN chmod +x entrypoint.sh 

EXPOSE  3000

ENTRYPOINT ["./entrypoint.sh"]
