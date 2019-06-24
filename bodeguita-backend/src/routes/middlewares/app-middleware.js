import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

export const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    throw Error("Authentication failed");
  }
  jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: false }, (err, decoded) => {
    if (err) {
      throw Error("Authentication failed");
    }
    req.userId = decoded.id;
    next();
  });
};

export const handleError = (error, req, res, next) => {
  if (error instanceof Sequelize.ValidationError) {
    const message = (error.errors || [])
      .map(err => {
        return err ? err.message || 'empty' : 'empty';
      })
      .join(',');
    return res.status(500).json({
      type: 'DatabaseError',
      messageCode: error.name,
      message: message
    });
  }
  if (error instanceof Error) {
    return res.status(500).json({
      type: 'TrackplusError',
      messageCode: error.message,
      message: res.__(error.message)
    });
  }
  next(error);
};

export const hashPassword = (req, res, next) => {
  const password = req.body.password;
  if (!password) {
    throw Error("No password provided");
  }
  req.body.password = bcrypt.hashSync(password, 8);
  next();
};

export const jsonAsyncBody = (body, req, res) => {
  return {
    success: body.success || true,
    data: body.data || null
  };
};