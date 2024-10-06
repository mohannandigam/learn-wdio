import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

const API_BASE_URL = "https://reqres.in/api";
const USERS_ENDPOINT = "/users";

describe("PATCH API Request Tests", () => {
  it("should be able to update name of the user", async () => {
    const userId = 2;
    const updatedData = createRandomUserData();
    const response = await updateUser(userId, updatedData);
    validateResponse(response, updatedData);
  });
});

function createRandomUserData() {
  return {
    name: faker.person.fullName(),
  };
}

async function updateUser(userId, userData) {
  try {
    const url = `${API_BASE_URL}${USERS_ENDPOINT}/${userId}`;
    const response = await axios.patch(url, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with id ${userId}:`, error.message);
    throw error;
  }
}

function validateResponse(responseData, expectedData) {
  console.log("Response data:", responseData);
  expect(responseData.name).to.equal(expectedData.name);
  expect(responseData).to.have.property("updatedAt");
}
