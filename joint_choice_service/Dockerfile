FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} joint_choice_service.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/joint_choice_service.jar"]