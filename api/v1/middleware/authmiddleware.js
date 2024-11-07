import hashes from './hashes';

export const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (typeof authHeader === 'undefined') {
    res.status(401).send({ success: false, message: 'Unauthorized - Header Not Set' });
    return;
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    res.status(401).send({ success: false, message: 'Access Denied. Please Log In.' });
    return;
  }

  try {
    const decoded = await hashes.verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).send({ success: false, message: 'Error verifying user.' });
  }
};

export const adminAuth = (req, res, next) => {
  const { role } = req.user;
  if (role !== 'admin') {
    return res.status(403).send({ success: false, message: 'Access Denied. For Admins only.' });
  }
  return next();
};

export const attendantAuth = (req, res, next) => {
  const { role } = req.user;
  if (role !== 'attendant') {
    return res.status(403).send({ success: false, message: 'Access Denied. For attendants only.' });
  }
  return next();
};
