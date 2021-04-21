import path from 'path'

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  definition: {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0", 
      "title": "Demo CRUD Project",
      "description": "practice of some tools like [babel , swagger , express , sequalize ...]",
      "contact": {
                "name": "Bastawesy",
                "email": "mohamedel.bastawesy2020@mail.com"
      },
      "license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
      }
    },
    "host": "localhost:3000",
    "basePath": "/api",
    "tags": [
      {
        "name": "Users",
        "description": "API for users in the system"
      }
    ],
   },
    "apis" : [path.join(__dirname, "./routes/api.js")] ,
  }
  export default swaggerOptions
  