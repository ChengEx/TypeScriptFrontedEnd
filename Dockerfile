FROM nginx:latest

COPY dist /usr/share/nginx/html 

COPY default.conf /etc/nginx/nginx.conf
