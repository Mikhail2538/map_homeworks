export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  /**
   * Добавляет ошибку в хранилище.
   * @param {number} code - Код ошибки.
   * @param {string} description - Описание ошибки.
   */
  addError(code, description) {
    this.errors.set(code, description);
  }

  /**
   * Возвращает описание ошибки по её коду.
   * @param {number} code - Код ошибки.
   * @returns {string} - Описание ошибки или 'Unknown error', если код неизвестен.
   */
  translate(code) {
    return this.errors.get(code) || "Unknown error";
  }
}
