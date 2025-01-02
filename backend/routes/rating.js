const express = require("express");
const jwtAuth = require("../middleware/jwtAuth");
const ratingCtrl = require("../controller/rating");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ratings
 *   description: API endpoints for managing ratings between recruiters and applicants
 */

/**
 * @swagger
 * /ratings:
 *   put:
 *     summary: Add or update a rating
 *     tags: [Ratings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               applicantId:
 *                 type: string
 *                 description: The ID of the applicant (required if the user is a recruiter)
 *                 example: "63fc8e2d435aa73295db44a8"
 *               jobId:
 *                 type: string
 *                 description: The ID of the job (required if the user is an applicant)
 *                 example: "63fc8e2d435aa73295db44a9"
 *               rating:
 *                 type: number
 *                 description: The rating to give, between 1 and 5
 *                 example: 5
 *     responses:
 *       200:
 *         description: Rating added or updated successfully
 *       400:
 *         description: Bad request or invalid input
 *       401:
 *         description: Unauthorized access
 */
router.put("/", jwtAuth, ratingCtrl.addRating);

/**
 * @swagger
 * /ratings:
 *   get:
 *     summary: Get personal rating
 *     tags: [Ratings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the applicant or job to get the rating for
 *     responses:
 *       200:
 *         description: The rating for the specified applicant or job
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rating:
 *                   type: number
 *                   description: The rating value or -1 if no rating exists
 *                   example: 4
 *       400:
 *         description: Bad request or invalid input
 *       401:
 *         description: Unauthorized access
 */
router.get("/", jwtAuth, ratingCtrl.getPersonalRating);

module.exports = router;
