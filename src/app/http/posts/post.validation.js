import { check } from 'express-validator'

const createPostValidation = () => {
  return [
    check('id')
      .exists().withMessage('id attribute is required')
      .isUUID(4).withMessage('id must be uuid v4'),
    check('name')
      .exists().withMessage('name attribute is required')
      .isString().withMessage('name must be a string')
      .isLength({ min: 3, max: 255 }).withMessage('name length must be between 3 and 255 characters'),
    check('description')
      .exists().withMessage('description attribute is required')
      .isString().withMessage('description must be a string')
  ]
}
// .matches(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i).withMessage('id must be uuid v4'),
export { createPostValidation }
