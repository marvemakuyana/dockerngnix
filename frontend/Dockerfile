FROM nginx:latest

# Add the current directory contents into the container
ADD . /usr/share/nginx/html
# Add nginx configuration
ADD nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for web server
EXPOSE 8013

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]