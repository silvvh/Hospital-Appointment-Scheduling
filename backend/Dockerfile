FROM maven:3.9.8-amazoncorretto-21

WORKDIR /app
COPY . .
RUN mvn clean install
RUN mvn clean install

CMD mvn spring-boot:run