const axios = require('axios');

exports.getData = async (req, res) => {
  try {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const dateString = `${year}-${month + 1}-${day}`;

    const location = req.params.location;

    const apiResponse = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${dateString}?key=${process.env.WEATHER_API}`
    );

    const data = await apiResponse.data;
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'fail',
      message: 'Failed to fetch Data',
    });
  }
};

setInterval(async () => {
  const res = await axios.post('https://weather-wise.onrender.com/delhi');
  const data = await res.data;
}, 840000);
