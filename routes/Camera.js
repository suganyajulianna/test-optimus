const Express = require('express');
const Router = Express.Router();
const CamereController = require('../controllers/Camere');
Router.post('/CameraRegister',CamereController.CameraPost)
Router.get('/CameraData',CamereController.CamereGet)
Router.put('/CamereUpdate/:id',CamereController.CamereUpdate)
Router.delete('/CamereDelete/:id',CamereController.CamereDelete)

module.exports = Router;