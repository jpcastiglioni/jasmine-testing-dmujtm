import { capitalizeName } from './capitalize-name';

describe('capitalizeName', () => {
  it('returns the object with name property capitalized', () => {
    // Arrange
    const laura: object = { name: "laura", other: "miau" };
    const expectedResult: object = { name: "LAURA", other: "miau"};

    // Act
    const capitalizedLaura: object = capitalizeName(laura);

    // Assert
    expect(capitalizedLaura).toEqual(expectedResult);
  });
});
