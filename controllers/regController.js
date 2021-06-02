import { User } from '../models/index.js';

function regController(req, res) {
  const {
    name, email, password,
  } = req.body;

  const data = User.create({
    name, email, password,
  });

  if (!data) {
    res.status(500).json({ message: 'Server error' });
  } else res.redirect('/');
}

export default regController;