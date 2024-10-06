import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

const API_BASE_URL = "https://reqres.in/api";
const USERS_ENDPOINT = "/users";

describe("POST API Request Tests", () => {
  it("should be able to post a user", async () => {
    const userData = createRandomUserData();
    const response = await createUser(userData);
    validateResponse(response, userData);
  });
});

function createRandomUserData() {
  return {
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
  };
}

async function createUser(userData) {
  try {
    const url = `${API_BASE_URL}${USERS_ENDPOINT}`;
    const response = await axios.post(url, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
}

function validateResponse(responseData, expectedData) {
  console.log("Response data:", responseData);
  expect(responseData.name).to.equal(expectedData.name);
  expect(responseData.job).to.equal(expectedData.job);
  expect(responseData).to.have.property("id");
  expect(responseData).to.have.property("createdAt");
}
