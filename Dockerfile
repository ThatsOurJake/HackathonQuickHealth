FROM node:12-alpine as build

WORKDIR /build

COPY ./package.json package.json
COPY ./.babelrc .babelrc
COPY ./src src

RUN ["npm", "i"]
RUN ["npm", "run", "build"]

WORKDIR /prod_modules

COPY ./package.json package.json

RUN ["npm", "i", "--only=production"]

## Production build

FROM node:12-alpine

WORKDIR /QuickHealth

COPY --from=build /build/package.json package.json
COPY --from=build /build/dist dist
COPY --from=build /prod_modules/node_modules node_modules

ENTRYPOINT [ "npm", "start" ]
