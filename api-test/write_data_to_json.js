import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";
import fs from "fs/promises";
import path from "path";

const API_URL = "https://reqres.in/api/users";
const RESPONSE_DATA_PATH = path.join(
  process.cwd(),
  "response-data",
  "post_response_data.json"
);

describe("Write Data Tests", () => {
  it("should be able to write data to JSON", async () => {
    const userData = createRandomUserData();
    const response = await createUser(userData);
    validateResponse(response, userData);
    await saveResponseData(response);
  });
});

function createRandomUserData() {
  return {
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
  };
}

async function createUser(userData) {
  const response = await axios.post(API_URL, userData);
  return response.data;
}

function validateResponse(responseData, expectedData) {
  expect(responseData.name).to.equal(expectedData.name);
  expect(responseData.job).to.equal(expectedData.job);
}

async function saveResponseData(responseData) {
  const dataToSave = {
    name: responseData.name,
    job: responseData.job,
    id: responseData.id,
    createdAt: responseData.createdAt,
  };
  await fs.writeFile(RESPONSE_DATA_PATH, JSON.stringify(dataToSave, null, 2));
}
