# WareHouse microservice
A simple nodejs server communicated with mongodb
Validation developed by 'express-validator'

### Can be executed by k8s. k8s build commands:
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

- Development environment URL
```
http://localhost:5050/api/v1
```
- K8S environment URL
```
http://localhost:5000/api/v1
```

## © Created by Ivan Kuzmich - 12.2023