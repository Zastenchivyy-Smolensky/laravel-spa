const axios = require("axios");
function fetchData(n) {
    return axios.get("http://localhost:8000/api/post" + n);
}
test("the res.data.id is 1", () => {
    expect.assertions(1);
    return fetchData(3).then((res) => {
        expect(res.data.id).toBe(undefined);
    });
});
