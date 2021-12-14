const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/forecast?access_key=a4901e607363637f3cb9a7d2021d7f2d&query=${lat},${lon}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}: ` +
          `It is currently ${body.current.temperature} degrees out, but it feels` +
          ` like ${body.current.feelslike} degrees out! Humidity: ${body.current.humidity}`
      );
    }
  });
};

module.exports = forecast;
