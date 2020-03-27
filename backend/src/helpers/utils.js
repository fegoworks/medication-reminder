import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * @param {string} password
 * @return {string} hash
 */
export const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

/**
 * @param {string} password
 * @param {string} hashPwd
 * @return {string} hash
 */
export const comparePassword = (password, hashPwd) => bcrypt.compareSync(password, hashPwd);

/**
 * @param {object} payload
 * @param {string} tokenExpiryDate
 * @param {string} secret
 * @return {string} token
 */
export const generateToken = (
  payload,
  tokenExpiryDate = '1h',
  secret = process.env.SECRET
) => jwt.sign(
  payload,
  secret, {
    expiresIn: tokenExpiryDate
  }
);


export const handleSuccessResponse = (res, data, statusCode = 200) => res.status(statusCode).json({
  status: 'success',
  data,
});

export const handleErrorResponse = (res, error, statusCode = 400) => res.status(statusCode).json({
  status: 'Request Failed',
  error,
});