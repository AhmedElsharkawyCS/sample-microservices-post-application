#!/usr/bin/env bash
chmod +x ./build.sh
echo "Build new image..."
docker build -t ahmedelsharkawy/event-bus-service .
echo "Pushing to docker hub..."
docker push ahmedelsharkawy/event-bus-service
