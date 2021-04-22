import express from 'express'
const routers = express.Router();
// Routes
/**
 * @swagger
 * paths:
 *  /users:
 *    get:
 *      description: Use to request all users
 *      tags : [Users]
 *      responses:
 *        '200':
 *         description: A successful response
 * /users:
 *  post:
 *    description: "Create a new user"
 *    tags : [Users]
 *    parameters :
 *     - name : user
 *       in: body
 *       type: object
 *       required: true
 *       description : the user id
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: bad request for user
 * /users/{userId}:
 *  get:
 *    description: "Use to request all users"
 *    tags : [Users]
 *    parameters :
 *     - name : id
 *       in: path
 *       type: integer
 *       required: true
 *       description : the user id
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Not Found response
 *  delete:
 *    description: "Delete a user "
 *    tags : [Users]
 *    parameters :
 *     - name : id
 *       in: path
 *       type: integer
 *       required: true
 *       description : the user id
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Not Found response
 *  put:
 *    description: "update a user "
 *    tags : [Users]
 *    parameters :
 *     - name : id
 *       in: path
 *       type: integer
 *       required: true
 *       description : the user id
 *     - name : user
 *       in: body
 *       type: object
 *       required: true
 *       description : the user details
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Not Found response
 * definitions:
 *  User:
 *   type: "object"
 *   properties:
 *     id:
 *       type: "integer"
 *       format: "int64"
 *     name:
 *       type: "string"
 *   json:
  *    name: "User"
 */
routers.get('/users', (req, res)=> {
  res.status(200).send({
  first : {
    name : "A" ,
    age : 50
   },
  second : {
    name : "B" ,
    age : 60
    }
  });
});
routers.post('/users', (req, res)=> {
  const inputUser = req.body.user
  inputUser ? res.status(200).send(inputUser) : res.status(400).send("bad user request data.")
});
routers.put('/users/:id', (req, res)=> {
  const inputUser = req.body.user
  inputUser ? res.status(200).send('user updated success .') : res.status(400).send("bad user request data.")
});
 routers.get('/users/:id',(req, res, next)=> {
   let user = {}
    req.params.id === 1?
      user = {  first : { name : "A" , age : 50 }} : 
      user = {  first : { name : "B" , age : 60 }};
      res.status(200).send(user);  
});
routers.delete('/users/:id',(req, res)=> {
  req.params.id ? res.status(200).send('user has been deleted.'):  
     res.status(404).send('bad request for delete user');  
});
export default routers