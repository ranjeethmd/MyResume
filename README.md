# What is this repository ?
This repository contains end to end implemetation of this websites [MD Ranjeeth](https://md.ranjeeth.info) and [MD Ranjeeth](https://www.ranjeeth.info)

Below are the list of taks accomplished by this repsoitory

- [x] Create an application using ReactJS, Asp.net Core and MongoDB and custom CSS (Neumorphism)
- [x] Containarize the application using Docker.
- [x] Build and push to docker repository [Docker Hub Image](https://hub.docker.com/repository/docker/ranjeethmd/my-resume)
- [x] Build K8s deployment manifest for azure deployment.
- [x] Create static IP in azure.
- [x] Create domain name using GoDaddy.com and redirect it to static ip.
- [x] Build K8s manifest to deploy nginx ingress controller to support https connection to external systems.
- [x] Build K8s mainfests to install CertManager, Issuer and Ingress to support and automate Letsencrypt SSL certificates.      
- [x] Build CI\CD pipeline using git actions to build .net core application with test, build and push docker containers. K8s deployment of the resources to azure on push and pull


## docker hub push pull run Command
```
docker build -t ranjeethmd/my-resume:v<%version number%> .

docker push ranjeethmd/my-resume:<%version number%>
```
## docker run local
```
docker run -d  -p 5000:8080 --name my_resume_container ranjeethmd/my-resume:v<%version number%>`
```
## k8s local docker desktop
```
kubectl apply -f deploy.yml --record

kubectl apply -f secrets.yml
```
## k8s delete deployment
```
kubectl delete deployment my-resume-deployment --namespace my-resume
```
## Infra setup
```
# Create static ip in azure.

az network public-ip create --resource-group MC_my-resume-rgp_my-resume-k8s_eastus --name my-resume-public --sku Standard --allocation-method static

az network public-ip show --resource-group my-resume-rgp --name my-resume-public --query ipAddress --output tsv

# Deploy cert manager

kubectl create namespace cert-manager

helm repo add jetstack https://charts.jetstack.io

helm repo update

helm install nginx-ingress ingress-nginx/ingress-nginx --namespace my-resume --set controller.replicaCount=2  --set controller.service.loadBalancerIP=<% static IP %>

helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.5.3 --set installCRDs=true

# Make sure that the ip is created under your node resource group otherwise the static IP will not be assigned. Node resource group is different than the resource under which K8s cluster is created.

az network public-ip show --resource-group mc_my-resume-<% K8s Node resource grp %> --name my-resume-ip --query ipAddress --output tsv
```
