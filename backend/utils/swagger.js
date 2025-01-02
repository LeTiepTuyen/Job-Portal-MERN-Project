const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal API Documentation",
      version: "1.0.0",
      description: "API documentation for the Job Portal project",
    },
    servers: [
      {
        url: "http://localhost:5000/api", // Base URL
      },
    ],
  },
  apis: ["./routes/*.js"], // Đường dẫn tới các file định nghĩa Swagger
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

const setupSwaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("API documentation available at http://localhost:5000/api-docs");
};

module.exports = setupSwaggerDocs;
