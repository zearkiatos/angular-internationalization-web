FROM node:18-alpine

COPY ["package.json","package-lock.json","/home/node/app/"]

WORKDIR /app

RUN apk update

RUN npm install -g npm@9.6.6

COPY [".","."]

RUN rm -rf node_modules

RUN npm install -g @angular/cli
RUN npm install

RUN rm -f node_modules/@angular/compiler-cli/ngcc/ngcc_lock_file
RUN rm node_modules/.ngcc_lock_file

EXPOSE 8000

ENTRYPOINT ["sh", "./docker/entrypoint.develop.sh"]
