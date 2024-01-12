.PHONY: build-dev
build-dev:
				COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker/dev/docker-compose.yml build

.PHONY: build-prod
build-prod:
				COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker/prod/docker-compose.yml build

.PHONY: build-stage
build-stage:
				COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker/stage/docker-compose.yml build

.PHONY: start-dev
start-dev:
				docker compose -f docker/dev/docker-compose.yml up -d

.PHONY: stop-dev
stop-dev:
				docker compose -f docker/dev/docker-compose.yml down

.PHONY: start-prod
start-prod:
				docker compose -f docker/prod/docker-compose.yml up -d

.PHONY: stop-prod
stop-prod:
				docker compose -f docker/prod/docker-compose.yml down

.PHONY: start-stage
start-stage:
				docker compose -f docker/stage/docker-compose.yml up -d

.PHONY: stop-stage
stop-stage:
				docker compose -f docker/stage/docker-compose.yml down
