# local-application-ci-cd-10

local-application-ci-cd-10

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start application
npm start
```

## 📦 Docker

```bash
# Build image
docker build -t local-application-ci-cd-10 .

# Run container
docker run -p 3000:3000 local-application-ci-cd-10
```

## 🔗 Endpoints

- `GET /` - Main endpoint
- `GET /health` - Health check

## 📊 CI/CD

This project uses GitHub Actions for CI/CD:

- **Test**: Runs on every push and PR
- **Build**: Builds Docker image on push to develop/main
- **Deploy**: Deploys to production on push to main

View the pipeline status in [GitHub Actions](https://github.com/votuan2302-org/local-application-ci-cd-10/actions).

## 📝 Owner

Maintained by: group:default/admins

