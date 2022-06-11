const httpMocks = require('node-mocks-http');
const dateHandler = require ('../date.js')


test("It's leap year", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date(2024, 2, 0));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year",
    });
    const response = httpMocks.createResponse();
    await dateHandler.leapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});
