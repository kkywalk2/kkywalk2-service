FROM node:18-alpine AS base

# INSTALL DEPENDENCIES FOR DEVELOPMENT (FOR NEST)
FROM base AS deps
WORKDIR /apps

COPY --chown=node:node package.json yarn.lock ./
RUN yarn --frozen-lockfile;

USER node

# INSTALL DEPENDENCIES & BUILD FOR PRODUCTION
FROM base AS build
WORKDIR /apps

COPY --chown=node:node --from=deps /apps/node_modules ./node_modules
COPY --chown=node:node . .

RUN yarn build-api

RUN yarn --frozen-lockfile --production;
RUN rm -rf ./.next/cache

USER node

# PRODUCTION IMAGE
FROM base AS production
WORKDIR /apps

COPY --chown=node:node --from=build /apps/node_modules ./node_modules
COPY --chown=node:node --from=build /apps/dist ./dist

ENV NODE_ENV production

EXPOSE 3000

ENV PORT=3000\
    OPEN_AI_API_KEY=TEST\
    DATABASE_HOST=localhost\
    DATABASE_PORT=5432\
    DATABASE_USER=test\
    DATABASE_PASSWORD=test\
    DATABASE_DB=test\
    JWT_SECRET=test

CMD [ "node", "dist/apps/api/main.js" ]
