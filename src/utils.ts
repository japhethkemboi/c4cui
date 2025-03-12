export const passwordGenerator = ({
  length = 12,
  includeNumbers = true,
  includeSymbols = true,
  excludeSimilarCharacters = false,
}: {
  length?: number;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
  excludeSimilarCharacters?: boolean;
}): string => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const similarCharacters = "O0Il1";

  let characters = letters;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (excludeSimilarCharacters) {
    characters = characters
      .split("")
      .filter((char) => !similarCharacters.includes(char))
      .join("");
  }

  if (characters.length === 0) {
    throw new Error("No valid characters available to generate password.");
  }

  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[randomIndex];
  }

  return generatedPassword;
};
