import swaggerJSDoc from "swagger-jsdoc";
const swaggerOptions = {
    definition:{
        openapi:'3.0.0',
        info:{
            title: 'API calificable IPS Atenea',
            version: '1.0.0',
            Description: 'Es esta API tenemos la funcionalidad de soportar la operacion de la IPS AteneaIPS'
        }
    },
    servers:[
        {
            url:'http:localhost:3000',
            description: 'Servidor local de documentacion'
        }
    ],

    apis:['src/index.ts', './swagger/*.swagger.ts']
}

export const swaggerSpec = swaggerJSDoc(swaggerOptions)