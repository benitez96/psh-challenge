FROM node:18-alpine AS development

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .