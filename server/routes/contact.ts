import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail, type ContactFormData } from '../emailService';

const router = Router();

const contactValidationRules = () => [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),

  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters'),
];

const validate = (req: Request, res: Response, next: Function) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    });
  }
  next();
};

router.post(
  '/contact',
  contactValidationRules(),
  validate,
  async (req: Request, res: Response) => {
    try {
      const formData: ContactFormData = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      };

      const result = await sendContactEmail(formData);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(500).json(result);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      });
    }
  }
);

export default router;
