import Router from 'express'
const router = Router()

export const homeRoutes = router.get('/', (req, res) => {
  res.render('index', {
    title: 'Main page',
    isHome: true
  })
})

