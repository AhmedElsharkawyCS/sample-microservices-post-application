#!/usr/bin/env bash
chmod +x ./build.sh
echo "Build new image..."
docker build -t ahmedelsharkawy/client-app-service .
echo "Pushing to docker hub..."
docker push ahmedelsharkawy/client-app-service
