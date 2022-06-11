const httpMocks = require('node-mocks-http');
const dateHandler = require ('../date.js')


test("It's weekend", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-11-06'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-week-end",
    });
    const response = httpMocks.createResponse();
    await dateHandler.isweekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});
