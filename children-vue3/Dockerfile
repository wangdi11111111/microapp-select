# Using a compact OS
FROM nginx:latest

MAINTAINER David Che <che_shuai@massclouds.com>

RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo Asia/Shanghai > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

# Install and configure Nginx
#RUN apk --update add nginx
#RUN sed -i "s#root   html;#root   /usr/share/nginx/html;#g" /etc/nginx/nginx.conf
#RUN ln -sf /dev/stdout /var/log/nginx/access.log \
#	&& ln -sf /dev/stderr /var/log/nginx/error.log

# Add 2048 stuff into Nginx server
COPY ./intelligently /etc/nginx/html/intelligently
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

# Start Nginx and keep it running background and start php
#CMD sed -i "s/ContainerID: /ContainerID: "$(hostname)"/g" /usr/share/nginx/html/index.html && nginx -g "pid /tmp/nginx.pid; daemon off;"
