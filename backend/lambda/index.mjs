export const handler = async (event) => {
    console.log("Event:", JSON.stringify(event, null, 2));
  
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // message: "Hello from Lambda!",
        message: "Hello from CI/CD Deployment!",
        timestamp: new Date().toISOString(),
        version: "1.0.0"
      })
    };
  };
  