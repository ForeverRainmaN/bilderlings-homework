FROM gradle:4.10 as build

# generates username for running commands
USER root

#Creates working directory named app
WORKDIR /app

# copy from <src> to <dest>
COPY . /app

RUN gradle -Dorg.gradle.daemon=false assemble
# have jar file at this moment

FROM openjdk:8-jre-alpine

WORKDIR /app
COPY --from=build /app/build/libs/bilderlings-homework-currency-calculator-*.jar /app/backend.jar
CMD ["sh", "-c", "java -jar /app/backend.jar"]
