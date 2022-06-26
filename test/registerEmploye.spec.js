import axios from "axios";

import { BASE_URL, registerUsers } from "./utils";

jest.mock("axios");

describe("registerUsers", () => {
  describe("when API call is successful", () => {
    it("should return registerd employee details", async () => {
      // given
      const registerUser = [
        {
            "name": "Anuj",
            "address": "Chandigarh",
            "department": "CSE",
            "contactInfo": "7018522539"
        }
      ];

      axios.post.mockResolvedValueOnce(registerUser);

      // when
      const result = await registerUsers();


      // then
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/registerEmployee`);
      expect(result).toEqual(registerUser);
    });
  });



  describe("when API call fails", () => {
    it("should return object with error users list", async () => {
      // given
      const message = "Network Error";
      axios.post.mockRejectedValueOnce(new Error(message));

      // when
      const result = await registerUsers();

      // then
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/registerEmployee`);
      expect(result).toEqual([{error: "error"}]);
    });
  });
});