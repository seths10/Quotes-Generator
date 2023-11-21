FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Adding icons directory to get the X logos to load
ADD icons ./icons

# Copy static assets over
COPY ./index.html ./
RUN mkdir styles
RUN mkdir js
COPY styles ./styles
COPY js ./js

EXPOSE 80/tcp

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]