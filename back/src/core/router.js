import express from 'express'
import passport from 'passport'


const router = express.Router()



//login route
router.get('/auth/', (req, res) => {
  res.redirect('/')
})


export default router
