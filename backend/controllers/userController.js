const asyncHandler = require('express-async-handler')

// @desc Register user
// @route POST /api/users
// @access Puplic
const registerUser = asyncHandler(async (req, res) => {

  res.json({ message: 'Register user' })
})

// @desc Authenticate user
// @route POST /api/users/login
// @access Puplic
const loginUser = asyncHandler(async (req, res) => {

  res.json({ message: 'Login user' })
})

// @desc Get user data
// @route GET /api/users/me
// @access Puplic
const getMe = asyncHandler(async (req, res) => {

  res.json({ message: 'User data' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}