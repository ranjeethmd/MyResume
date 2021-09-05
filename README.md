## docker hub push pull run Command
docker build -t ranjeethmd/my-resume:v1 .

docker push ranjeethmd/my-resume:v1
## docker run local
docker run -d  -p 5000:8080 --name my_resume_container ranjeethmd/my-resume:v1

## k8s local docker desktop
kubectl apply -f deploy.yml --record

kubectl apply -f secrets.yml

## k8s delete deployment
kubectl delete deployment my-resume-deployment --namespace my-resume

## infra setup
az network public-ip create --resource-group MC_my-resume-rgp_my-resume-k8s_eastus --name my-resume-public --sku Standard --allocation-method static

az network public-ip show --resource-group my-resume-rgp --name my-resume-public --query ipAddress --output tsv

kubectl create namespace cert-manager

helm repo add jetstack https://charts.jetstack.io

helm repo update

helm install nginx-ingress ingress-nginx/ingress-nginx --namespace my-resume --set controller.replicaCount=2  --set controller.service.loadBalancerIP=52.190.25.235

helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.5.3 --set installCRDs=true

az network public-ip show --resource-group mc_my-resume-rgp_my-resume-k8s_eastus --name my-resume-ip --query ipAddress --output tsv