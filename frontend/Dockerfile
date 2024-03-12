FROM node:latest as builder
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./
RUN ls

RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist /opt/site
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Health check example, different values can be specified when running
HEALTHCHECK --interval=20s --timeout=20s --retries=3 --start-period=120s CMD curl --fail http://127.0.0.1:80 | grep "Welcome to my app!" || exit 1"

ENTRYPOINT ["nginx", "-g", "daemon off;"]
