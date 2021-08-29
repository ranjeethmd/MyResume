FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env

# I like this simple application everything is built outside the box. Docker needs to worry about just executiong it. Easier to debug build errors
LABEL org.opencontainers.image.title="Hello Docker with Asp.net core Docker and Github actions automated build and push" \
      org.opencontainers.image.description="Dockerized Asp.net core 5.0 app with Angular" \
      org.opencontainers.image.authors="Ranjeeth Malachira Devaiah"

RUN apt-get update -yq
RUN apt-get install curl gnupg -yq
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install nodejs -yq

WORKDIR /app

COPY ProfileEngine.Data/ ./ProfileEngine.Data

COPY ProfileEngine/ ./ProfileEngine

WORKDIR /app/ProfileEngine

RUN dotnet restore
RUN dotnet publish -c Release -o out



FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build-env /app/ProfileEngine/out .

# Remove non root user

RUN useradd -ms /bin/bash app_user

#Update the environment variables
ENV ASPNETCORE_URLS=http://+:8080

#Add read permission for the user
RUN chown -R app_user /app

#Add the read permission on the folder.
RUN chmod 755 /app

USER app_user

ENTRYPOINT ["dotnet", "ProfileEngine.dll"]