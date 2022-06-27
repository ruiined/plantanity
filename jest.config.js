const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
  moduleNameMapper: {
    "@lib/(.*)": "<rootDir>/lib/$1",
    "@models/(.*)": "<rootDir>/models/$1",
    "@components/(.*)": "<rootDir>/components/$1",
    "@pages/(.*)": "<rootDir>/pages/$1",
  },
  modulePaths: ["<rootDir>"],
};
module.exports = createJestConfig(customJestConfig);
