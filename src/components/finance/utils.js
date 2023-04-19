const getDateRange = () => {
  const today = new Date(); // Get today's date
  const oneYearAgo = new Date(today); // Create a new Date object for today's date
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1); // Subtract one year from the current year

  // Format the dates in the required format: YYYY-MM-DD
  const todayFormatted = today.toISOString().split("T")[0];
  const oneYearAgoFormatted = oneYearAgo.toISOString().split("T")[0];

  const dateRange = `${oneYearAgoFormatted}..${todayFormatted}`;
  console.log(dateRange);

  // Return the formatted dates as a string with '..' separator
  return dateRange;
};

export { getDateRange };
