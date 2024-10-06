import axios from "axios";
import { expect } from "chai";

const API_BASE_URL = "https://reqres.in/api";
const USERS_ENDPOINT = "/users";

describe("GET API Request Tests", () => {
  it("should be able to get user list", async () => {
    const response = await fetchUsers();
    validateResponse(response);
  });
});

async function fetchUsers() {
  try {
    const response = await axios.get(`${API_BASE_URL}${USERS_ENDPOINT}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
}

function validateResponse(responseData) {
  expect(responseData.page).to.equal(1);
  expect(responseData.per_page).to.equal(6);
  logResponseData(responseData);
}

function logResponseData(data) {
  console.log("Response data:", JSON.stringify(data, null, 2));
}
