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