import axios from "axios";
import { expect } from "chai";

const API_BASE_URL = "https://reqres.in/api";
const USERS_ENDPOINT = "/users";

describe("DELETE API Request Tests", () => {
  it("should be able to delete user with id 2", async () => {
    const userId = 2;
    const response = await deleteUser(userId);
    validateResponse(response);
  });
});

async function deleteUser(userId) {
  try {
    const url = `${API_BASE_URL}${USERS_ENDPOINT}/${userId}`;
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    console.error(`Error deleting user with id ${userId}:`, error.message);
    throw error;
  }
}

function validateResponse(response) {
  expect(response.status).to.equal(204);
  console.log(`User deleted successfully. Status code: ${response.status}`);
}
