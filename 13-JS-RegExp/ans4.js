function extractDateParts(pattern, dateString) {
    const regex = new RegExp(pattern);
    const match = regex.exec(dateString);
  
    if (match) {
      // Extracted parts using groups
      const day = match[1] || "N/A";
      const month = match[2] || "N/A";
      const year = match[3] || "N/A";
  
      return {
        hasMatch: true,
        day,
        month,
        year,
      };
    } else {
      return {
        hasMatch: false,
      };
    }
  }
  
  // Test the function with a sample date string
  const testDateString = "Date: 25-12-2022";
  
  // Pattern with groups to capture day, month, and year
  const datePattern = /Date: (\d{2})-(\d{2})-(\d{4})/;
  
  const result = extractDateParts(datePattern, testDateString);
  
  console.log("Original Date String:", testDateString);
  
  if (result.hasMatch) {
    console.log("Day:", result.day);
    console.log("Month:", result.month);
    console.log("Year:", result.year);
  } else {
    console.log("No match found.");
  }
  