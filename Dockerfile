FROM node:10-alpine as builder

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
