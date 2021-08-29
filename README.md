## docker hub push pull run Command
docker build -t ranjeethmd/my-resume:v1 .

docker push ranjeethmd/my-resume:v1

docker run -d  -p 5000:80 --name my_resume_container ranjeethmd/my-resume:v1