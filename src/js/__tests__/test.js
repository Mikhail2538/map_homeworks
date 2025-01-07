import ErrorRepository from "../../index";

describe("ErrorRepository", () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test("should add and retrieve error description by code", () => {
    errorRepo.addError(404, "Not Found");
    errorRepo.addError(500, "Internal Server Error");

    expect(errorRepo.translate(404)).toBe("Not Found");
    expect(errorRepo.translate(500)).toBe("Internal Server Error");
  });

  test('should return "Unknown error" for an unknown code', () => {
    expect(errorRepo.translate(123)).toBe("Unknown error");
  });

  test("should handle adding multiple errors with unique codes", () => {
    errorRepo.addError(1, "First error");
    errorRepo.addError(2, "Second error");
    errorRepo.addError(3, "Third error");

    expect(errorRepo.translate(1)).toBe("First error");
    expect(errorRepo.translate(2)).toBe("Second error");
    expect(errorRepo.translate(3)).toBe("Third error");
  });

  test("should overwrite error description if code already exists", () => {
    errorRepo.addError(404, "Initial description");
    errorRepo.addError(404, "Updated description");

    expect(errorRepo.translate(404)).toBe("Updated description");
  });
});
