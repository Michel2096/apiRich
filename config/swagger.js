import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: "A simple Express API"
        },
        servers: [
            {
                url: "http://localhost:9000",
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;