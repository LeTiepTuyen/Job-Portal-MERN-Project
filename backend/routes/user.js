const multer = require("multer");
const express = require("express");
const jwtAuth = require("../middleware/jwtAuth");

const userCtrl = require("../controller/user");
const upload = multer();

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /users/all:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 allUser:
 *                   type: array
 *                   items:
 *                     type: object
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 */
router.get("/all", userCtrl.getAllUser);

/**
 * @swagger
 * /users/allApplicant:
 *   get:
 *     summary: Get all applicants
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of all job applicants
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 allUser:
 *                   type: array
 *                   items:
 *                     type: object
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 */
router.get("/allApplicant", userCtrl.getAllUserApplicant);

/**
 * @swagger
 * /users/allRecruiter:
 *   get:
 *     summary: Get all recruiters
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of all recruiters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 allUser:
 *                   type: array
 *                   items:
 *                     type: object
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 */
router.get("/allRecruiter", userCtrl.getAllUserRecruiter);

/**
 * @swagger
 * /users/:
 *   get:
 *     summary: Get user details
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Unauthorized
 */
router.get("/", jwtAuth, userCtrl.getUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user details by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 */
router.get("/:id", userCtrl.getUserId);

/**
 * @swagger
 * /users/allRecruiter/{id}:
 *   get:
 *     summary: Get recruiter details by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Recruiter ID
 *     responses:
 *       200:
 *         description: Recruiter details
 *       404:
 *         description: Recruiter not found
 */
router.get("/allRecruiter/:id", userCtrl.getIdRecruiter);

/**
 * @swagger
 * /users/allApplicant/{id}:
 *   get:
 *     summary: Get applicant details by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Applicant ID
 *     responses:
 *       200:
 *         description: Applicant details
 *       404:
 *         description: Applicant not found
 */
router.get("/allApplicant/:id", userCtrl.getIdApplicant);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user details
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", upload.none(), jwtAuth, userCtrl.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", jwtAuth, userCtrl.deleteUser);

module.exports = router;
