## docker hub push pull run Command
docker build -t ranjeethmd/my-resume:v1 .

docker push ranjeethmd/my-resume:v1

docker run -d  -p 5000:8080 --name my_resume_container ranjeethmd/my-resume:v1

kubectl create secret generic my-resume-secret --from-file=connection.txt --namespace=my-resume