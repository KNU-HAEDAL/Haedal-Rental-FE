# base stage
FROM node:20.11.0-alpine3.19 AS base

# builder stage
FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN npm install -g pnpm turbo
COPY . .
RUN turbo prune --scope=web --docker

# installer stage
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable
RUN pnpm install --frozen-lockfile --prod=false

COPY --from=builder /app/out/full/ .
RUN pnpm dlx turbo run build --filter=web

# runner stage
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs


COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone /app/standalone
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static /app/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public /app/public

CMD ["node", "/app/standalone/apps/web/server.js"]