const PropertiesReader = require("properties-reader");
const axios = require("axios");
const { expect } = require("chai");

const CONFIG_PATH = "config/env.properties";
const USERS_ENDPOINT = "/users";

const properties = PropertiesReader(CONFIG_PATH);

describe("Base URL from Property File Tests", () => {
  let baseUrl;

  before(() => {
    baseUrl = properties.get("baseUrl");
    console.log(`Base URL: ${baseUrl}`);
  });

  it("should be able to get baseUrl from property file and fetch users", async () => {
    const response = await fetchUsers();
    validateResponse(response);
  });
});

async function fetchUsers() {
  const url = new URL(USERS_ENDPOINT, baseUrl);
  console.log(`Fetching users from: ${url}`);
  return await axios.get(url.toString());
}

function validateResponse(response) {
  expect(response.status).to.equal(200);
  expect(response.data.page).to.equal(1);
  expect(response.data.per_page).to.equal(6);
  console.log("Response data:", JSON.stringify(response.data, null, 2));
}
