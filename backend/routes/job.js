const express = require("express");
const jobCtrl = require("../controller/job");
const jwtAuth = require("../middleware/jwtAuth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: API endpoints for job management
 */

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Add a new job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Software Engineer
 *               maxApplicants:
 *                 type: integer
 *                 example: 50
 *               maxPositions:
 *                 type: integer
 *                 example: 5
 *               dateOfPosting:
 *                 type: string
 *                 format: date
 *                 example: 2025-01-01
 *               deadline:
 *                 type: string
 *                 format: date
 *                 example: 2025-01-15
 *               skillsets:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["JavaScript", "Node.js", "React"]
 *               jobType:
 *                 type: string
 *                 example: Full-Time
 *               duration:
 *                 type: integer
 *                 example: 12
 *               salary:
 *                 type: integer
 *                 example: 60000
 *               rating:
 *                 type: number
 *                 example: 4.5
 *               description:
 *                 type: string
 *                 example: Job description here
 *               location:
 *                 type: string
 *                 example: San Francisco, CA
 *     responses:
 *       200:
 *         description: Job added successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post("/", jwtAuth, jobCtrl.addJob);

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get a list of jobs
 *     tags: [Jobs]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search query for job title
 *       - in: query
 *         name: jobType
 *         schema:
 *           type: string
 *         description: Filter jobs by type
 *       - in: query
 *         name: salaryMin
 *         schema:
 *           type: integer
 *         description: Minimum salary
 *       - in: query
 *         name: salaryMax
 *         schema:
 *           type: integer
 *         description: Maximum salary
 *       - in: query
 *         name: duration
 *         schema:
 *           type: integer
 *         description: Maximum duration
 *       - in: query
 *         name: asc
 *         schema:
 *           type: string
 *         description: Sort in ascending order by field
 *       - in: query
 *         name: desc
 *         schema:
 *           type: string
 *         description: Sort in descending order by field
 *     responses:
 *       200:
 *         description: List of jobs
 *       400:
 *         description: Bad request
 */
router.get("/", jobCtrl.getJobList);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get details of a specific job
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job details
 *       404:
 *         description: Job not found
 */
router.get("/:id", jobCtrl.getJobId);

/**
 * @swagger
 * /jobs/{id}/applications:
 *   get:
 *     summary: Get applications for a specific job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     responses:
 *       200:
 *         description: List of applications
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Job not found
 */
router.get("/:id/applications", jwtAuth, jobCtrl.getApplications);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Update job details
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", jwtAuth, jobCtrl.updateJobDetails);

/**
 * @swagger
 * /jobs/{id}/applications:
 *   post:
 *     summary: Apply for a job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sop:
 *                 type: string
 *                 example: Statement of purpose
 *     responses:
 *       200:
 *         description: Job application successful
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post("/:id/applications", jwtAuth, jobCtrl.applyJob);

/**
 * @swagger
 * /jobs/{id}/check-accepted:
 *   get:
 *     summary: Check if the user has been accepted for a job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Application status
 *       401:
 *         description: Unauthorized
 */
router.get("/:id/check-accepted", jwtAuth, jobCtrl.checkApply);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Job not found
 */
router.delete("/:id", jwtAuth, jobCtrl.deleteJob);

module.exports = router;
