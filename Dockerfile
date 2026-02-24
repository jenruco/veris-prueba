#compilar app
FROM node:20-alpine AS build

WORKDIR /app

# Copiar package.json y package-lock.json

COPY package*.json ./

RUN npm install

COPY . .

#compilar para obtener dist
RUN npm run build

#server nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/app-veris/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]