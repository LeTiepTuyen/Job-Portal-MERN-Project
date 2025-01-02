const express = require("express");
const authCtrl = require("../controller/auth");

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API endpoints for user authentication and account management
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *               type:
 *                 type: string
 *                 example: recruiter
 *     responses:
 *       200:
 *         description: Successfully registered user.
 *       400:
 *         description: Validation error or missing input.
 */
const router = express.Router();
router.post("/signup", authCtrl.SignUp);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Successfully logged in user.
 *       401:
 *         description: Invalid credentials.
 */
router.post("/login", authCtrl.Login);

/**
 * @swagger
 * /api/auth/password/forgot:
 *   post:
 *     summary: Request a password reset
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: Password reset email sent.
 *       404:
 *         description: User not found.
 */
router.post("/password/forgot", authCtrl.forgotPassword);

/**
 * @swagger
 * /api/auth/password/reset:
 *   put:
 *     summary: Reset a user's password
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 example: newpassword123
 *               token:
 *                 type: string
 *                 example: reset_token
 *     responses:
 *       200:
 *         description: Password reset successful.
 *       400:
 *         description: Invalid or expired reset token.
 */
router.put("/password/reset", authCtrl.resetPassword);

/**
 * @swagger
 * /api/auth/send_recovery_email:
 *   post:
 *     summary: Send a recovery email
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: Recovery email sent successfully.
 *       500:
 *         description: Internal server error.
 */
router.post("/send_recovery_email", authCtrl.sendEmail);

/**
 * @swagger
 * /api/auth/verify_otp:
 *   post:
 *     summary: Verify OTP for email verification
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               enteredOTP:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: OTP verified successfully.
 *       400:
 *         description: Invalid OTP.
 *       404:
 *         description: User not found.
 */
router.post("/verify_otp", authCtrl.VerifyEmail);

module.exports = router;
