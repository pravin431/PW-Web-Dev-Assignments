function calculateDeliveryTime(packageType) {
    let deliveryTime;
  
    switch (packageType.toLowerCase()) {
      case "standard":
        deliveryTime = "3-5 days";
        break;
      case "express":
        deliveryTime = "1-2 days";
        break;
      case "overnight":
        deliveryTime = "next day";
        break;
      default:
        deliveryTime = "not specified";
    }
  
    return deliveryTime;
  }
  
  // Test the function with different package types
  const standardDelivery = calculateDeliveryTime("standard");
  const expressDelivery = calculateDeliveryTime("express");
  const overnightDelivery = calculateDeliveryTime("overnight");
  const unspecifiedDelivery = calculateDeliveryTime("somethingelse");
  
  console.log("Standard Delivery:", standardDelivery);
  console.log("Express Delivery:", expressDelivery);
  console.log("Overnight Delivery:", overnightDelivery);
  console.log("Unspecified Delivery:", unspecifiedDelivery);
  