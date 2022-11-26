import { validationResult } from 'express-validator'

const validate = (request, response, next) => {
  const errors = validationResult(request)
  if (errors.isEmpty()) return next()
  const failData = {}
  errors.array().forEach((error, index) => {
    if (failData[error.param] === undefined) failData[error.param] = [error.msg]
    else failData[error.param].push(error.msg)
  })
  next(response.json({ error: failData }))
}

export default validate
