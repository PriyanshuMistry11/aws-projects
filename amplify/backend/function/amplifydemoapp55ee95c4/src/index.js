exports.handler = async (event) => {
  const customerId =
    event.pathParameters?.customerId ||
    event.pathParameters?.customerid;

  const customer = {
    customerId,
    customerName: "Customer " + customerId
  };

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    },
    body: JSON.stringify(customer)
  };
};
