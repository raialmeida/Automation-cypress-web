FROM cypress/base:18.14.1

# Create Directory for the Container
WORKDIR  /app

# Only copy the package.json file to work directory
COPY package*.json ./
COPY cypress.config.js ./

# Install all Packages
RUN npm ci

# Copy all other source code to work directory
COPY . /app