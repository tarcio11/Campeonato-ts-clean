export interface FieldValidation {
  validate: (input: object) => Error
}
