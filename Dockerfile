FROM node:12 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
COPY --from=node /app/dist/calculator /usr/share/nginx/html
