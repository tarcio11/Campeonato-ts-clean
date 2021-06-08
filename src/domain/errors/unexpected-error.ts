export class UnexpectedError extends Error {
  constructor () {
    super('Lamentamos, ocorreu um erro inesperado')
    this.name = 'UnexpectedError'
  }
}
