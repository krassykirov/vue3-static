# Build stage for Vue.js frontend
FROM node:18.19.0-alpine3.18 as build-stage
WORKDIR /app
COPY package*.json .
COPY routes.json .
COPY staticwebapp.config.json .
RUN npm install
COPY . .
RUN npm run build --prod
COPY staticwebapp.config.json .
COPY routes.json .

# Production stage
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY staticwebapp.config.json /usr/share/nginx/html
COPY routes.json /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

