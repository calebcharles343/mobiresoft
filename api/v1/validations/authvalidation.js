import validator from 'validator';
import User from '../models/Users';

const convertText = a => (a.charAt(0).toUpperCase() + a.slice(1)).trim();

export default {
  logInValid: (req, res, next) => {
    const { email, password } = req.body;
    const errors = [];

    if (!email || validator.isEmpty(email)) {
      errors.push('Please insert your email address.');
    }
    if (!password || validator.isEmpty(password)) {
      errors.push('Please insert your password.');
    }
    if (errors.length > 0) {
      return res.status(400).send({
        success: false,
        message: 'One or more fields are missing.',
        data: errors,
      });
    }
    req.body.email = email.trim();
    req.body.password = password.trim();
    return next();
  },

  signUpValid: async (req, res, next) => {
    const {
      firstName, lastName, email, password, role,
    } = req.body;
    const errors = [];
    const newFirstName = convertText(firstName);
    const newLastName = convertText(lastName);
    const newEmail = email.trim();
    const newPassword = password.trim();
    const newRole = role.trim().toLowerCase();

    const fields = [newFirstName, newLastName, newEmail, newPassword, newRole];
    let emptyField;
    fields.map((field) => {
      if (!field || validator.isEmpty(field)) {
        emptyField = true;
      }
      return emptyField;
    });
    if (emptyField) return res.status(400).send({ success: false, message: 'Please fill in all fields.' });
    if (!validator.isAlpha(newFirstName)) {
      errors.push('Your first name should contain only alphabets.');
    }
    if (!validator.isLength(newFirstName, { min: 2, max: 50 })) {
      errors.push('Your first name should be between 2 and 50 characters long');
    }
    if (!validator.isAlpha(newLastName)) {
      errors.push('Your last name should contain only alphabets.');
    }
    if (!validator.isLength(newLastName, { min: 2, max: 50 })) {
      errors.push('Your last name should be between 2 and 50 characters long.');
    }
    if (!validator.isEmail(newEmail)) {
      errors.push('Please insert a valid email address.');
    }
    if (!validator.isLength(newPassword, { min: 6, max: 25 })) {
      errors.push('Your password should be between 6 and 25 characters long.');
    }
    if (!validator.isAlphanumeric(newPassword)) {
      errors.push('Your password should contain only letters and numbers.');
    }
    if (!validator.isIn(newRole, ['admin', 'attendant'])) {
      errors.push('Please insert a valid role');
    }
    if (errors.length > 0) {
      return res.status(400).send({
        success: false,
        data: errors,
      });
    }
    req.body.firstName = newFirstName;
    req.body.lastName = newLastName;
    req.body.email = newEmail;
    req.body.password = newPassword;
    req.body.role = newRole;

    try {
      const result = await User.logIn(newEmail);
      if (result) {
        return res.status(400).send({ success: false, message: 'This email address is already taken.' });
      }
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
    return next();
  },
};
