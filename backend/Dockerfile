FROM python:3.10-slim-buster

# Set working directory
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose Flask port
EXPOSE 8012

# Start Flask app
CMD ["flask", "run", "--host=0.0.0.0", "--port=8012"]