import express from 'express'


const router = express.Router()



//login route
router.get('/auth/', (req, res) => {
  res.redirect('/')
})


export default router
