FROM node:14.18.1 as build
COPY . .
RUN npm run build --verbose

FROM nginx:1.17.1-alpine
COPY --from=build /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
