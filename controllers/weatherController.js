exports.getData = async (req, res) => {
  try {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const dateString = `${year}-${month + 1}-${day}`;
    console.log(dateString);

    const location = req.params.location;

    const apiResponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${dateString}?key=${process.env.WEATHER_API}`
    );

    const data = await apiResponse.json();
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
