project_id = "dignity-266123"

container-build: ## builds a new container, expects `v=` for next version number
	docker build -t gcr.io/dignity-266123/dignity:v${v} .

container-push: ## pushes container, expects `v=` for version number
	docker push gcr.io/dignity-266123/dignity:v${v}

container-run: ## runs a container, expects `v=` for versions number
	docker run --rm -p 3000:3000 gcr.io/dignity-266123/dignity:v${v}

start-dev:
	npm run build
	NODE_ENV=development node ./server.js

start-prod:
	npm run build
	NODE_ENV=production node ./server.js