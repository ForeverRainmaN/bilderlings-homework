FROM node:10.1.0 as build

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

FROM httpd:2.4

COPY --from=build /app/build /usr/local/apache2/htdocs/
