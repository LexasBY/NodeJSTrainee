import Router from 'express'

const router = Router()

export const signUp = router.get('/', (req, res) => {
  res.render('signup', {
    title: 'sign Up page',
    isAdd: true
  })
})

