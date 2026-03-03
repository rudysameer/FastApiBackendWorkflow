module.exports = {
  apps: [
    {
      // Catching the REPO_NAME from GitHub or defaulting to 'fastapi-app'
      name: process.env.REPO_NAME || "fastapi-app",
      
      script: "uvicorn",
      
      // If you are using a virtualenv, provide the full path here
      interpreter: "python3", 
      
      // Using backticks (`) to inject the variables into the string
      args: `app.main:app --host ${process.env.APP_HOST} --port ${process.env.APP_PORT}`,
      
      // Optional: You can also pass them into the Python app itself
      env: {
        HOST: process.env.APP_HOST,
        PORT: process.env.APP_PORT
      }
    }
  ]
};