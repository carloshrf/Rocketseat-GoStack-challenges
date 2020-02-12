import User from '../models/User';
import jwt from 'jsonwebtoken';

class SessionController {
  async store(req, res) {
    const {email, password} = req.body;
    
    const user = await User.findOne({where: {email}});

    if(!user) {
      return res.status(401).json({error: 'User not found'});
    }

    
  }
}

export default new SessionController();