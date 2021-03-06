const express = require('express')
const trip = require('../controller/Trip')
const job = require('../controller/Job')
const multer  = require('multer')
const upload = multer({ dest: '../uploads/trip_img' })

module.exports = () => {
   const router = express.Router()

   router.route('/')
   .get(async (req, res) => {
      res.status(200).json(await trip.getAll())
   })
   .post( async (req, res) => {
      try {
         console.log(req.body);
         await trip.create(req.body)
         res.sendStatus(201)
      } catch (e) {
         res.sendStatus(400)
         throw e
      }
   })

   router.get('/:id', async (req, res) => {
      res.status(200).json(await trip.getById(req.params.id))
   })

   return router
}