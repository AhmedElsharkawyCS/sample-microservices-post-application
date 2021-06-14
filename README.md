# Microservices-Blog-App-Using-NodeJS-ReactJS

## live demo

- [alias](0)

## `Main concepts/Feature/Topics`

- Architect large, scalable apps using a collection of microservices
- Solve concurrency issues in a distributed systems environment
- Build a Server-Side Rendered React App to render data from your microservices
- Share reusable code between multiple Express servers using custom NPM packages
- Communicate data between services using a lightning-fast event bus
- Deploy a multi-service app to the cloud with Docker and Kubernetes
- Leverage your Javascript skills to build a complex web app
- Understand how enterprise companies design their infrastructure
- Write comprehensive tests to ensure each service works as designed
- Write nothing but production-level code. No cutting corners!
- Use state management like redux

## `Libraries & modules & languages`

- `nodeJS`
- `reactJs`
- `expressJs`
- `axios`
- `javascript`
- `typescript`
- `concurrently`

## Kubernetes Terminologies

- `Kubernetes Cluster` => `a set of nodes + a master to mange all cluster's nodes`
- `Nodes` => `a virtual machine that will run our containers`
- `Pod` => `More or less running containers and it can run one or multiple containers/image`
- `Deployment` => `Monitor a set of "Pods" and make sure they are running and rester any one if crashed`
- `Service` => `Provides an easy-to-remember URL to access a running container | Helps to communicate the containers to each others`

## Kubernetes

### Pods

- `kubectl get pods` to get all applied pods
- `kubectl exec -it [pod_name] [cmd]` to execute a command line in specific pod
- `kubectl logs [pod_name]` to print the logs of pod
- `kubectl delete pod [pod_name]` to delete given pod
- `kubectl apply -f [config_file_path]` to tell k8 to process the config file and create a pod
- `kubectl describe [pod_name]` to print out some info about pod

### Deployment

- `kubectl get deployments` to get all applied deployments
- `kubectl delete deployment [pod_name]` to delete given deployment
- `kubectl apply -f [config_file_path]` to tell k8 to process the config file and create a deployment
- `kubectl describe deployments [deployment_name]` to print out some info about deployments
- `kubectl rollout restart deployments [deployment_name]` to restart the deployment again
