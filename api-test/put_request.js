import axios from "axios";
import { expect } from "chai";
import { faker } from "@faker-js/faker";

describe("PUT API Request Tests", () => {
  const BASE_URL = "https://reqres.in/api";
  const USER_ID = 2;

  it("should be able to update a user", async () => {
    const userData = createRandomUserData();
    const response = await updateUser(USER_ID, userData);
    validateResponse(response, userData);
  });
});

function createRandomUserData() {
  return {
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
  };
}

async function updateUser(userId, userData) {
  const url = `${BASE_URL}/users/${userId}`;
  const response = await axios.put(url, userData);
  return response.data;
}

function validateResponse(responseData, expectedData) {
  console.log(responseData);
  expect(responseData.name).to.equal(expectedData.name);
  expect(responseData.job).to.equal(expectedData.job);
}
