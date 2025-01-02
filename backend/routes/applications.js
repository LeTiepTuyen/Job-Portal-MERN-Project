const express = require("express");
const applicationCtrl = require("../controller/applications");
const jwtAuth = require("../middleware/jwtAuth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Applications
 *   description: API endpoints for managing job applications
 */

/**
 * @swagger
 * /applications:
 *   get:
 *     summary: Get all job applications
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of job applications
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 applications:
 *                   type: array
 *                   items:
 *                     type: object
 *                   example: [
 *                     {
 *                       userId: "63fc8e2d435aa73295db44a8",
 *                       recruiterId: "63fc8e2d435aa73295db44a7",
 *                       jobId: "63fc8e2d435aa73295db44a9",
 *                       status: "applied",
 *                       dateOfApplication: "2025-01-01T12:00:00Z"
 *                     }
 *                   ]
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad request
 */
router.get("/", jwtAuth, applicationCtrl.getAllApplications);

/**
 * @swagger
 * /applications/{id}:
 *   put:
 *     summary: Update the status of a job application
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Application ID
 *       - in: body
 *         name: status
 *         description: Status update for the application
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               example: "accepted"
 *             dateOfJoining:
 *               type: string
 *               format: date
 *               example: "2025-01-15"
 *     responses:
 *       200:
 *         description: Application status updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Application or job not found
 *       400:
 *         description: Bad request
 */
router.put("/:id", jwtAuth, applicationCtrl.updateStatusApplication);

module.exports = router;
