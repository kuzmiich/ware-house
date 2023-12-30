# WareHouse microservice
A simple nodejs server communicated with mongodb
Validation developed by 'express-validator'

## Can be executed by k8s. k8s build commands:
### Build image
```
docker build -t your_dockerhub_username/warehouse .
```
### Deploy image to hub.docker.com
```
docker push your_dockerhub_username/warehouse:latest
```
### Apply k8s deployments
```
kubectl apply -f .\k8s\mongodb-deployment.yaml
kubectl apply -f .\k8s\warehouse-deployment.yaml
```


# © Created by Ivan Kuzmich