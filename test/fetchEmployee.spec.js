import axios from "axios";

import { BASE_URL, fetchUsers } from "./utils";

jest.mock("axios");

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [
        {
            "_id": "62b45a475109cb2ea94855a2",
            "name": "Anuj",
            "address": "Chandigarh",
            "department": "Civil",
            "contactInfo": 8628063948,
            "createdAt": "2022-06-23T12:19:19.509Z",
            "updatedAt": "2022-06-23T12:19:19.509Z",
            "__v": 0
        }
      ];

      axios.post.mockResolvedValueOnce(users);

      // when
      const result = await fetchUsers();

      // then
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/fetchEmployee/`);
      expect(result).toEqual(users);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      axios.post.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchUsers();

      // then
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/fetchEmployee/`);
      expect(result).toEqual([]);
    });
  });
});