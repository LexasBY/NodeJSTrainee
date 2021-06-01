import Router from 'express'
const router = Router()

export const signIn = router.get('/', (req, res) => {
  res.render('signin', {
    title: 'signIn page',
    isCourses: true
  })
})


