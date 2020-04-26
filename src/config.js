const dev = {
  STRIPE_KEY: "pk_test_6SzfiGAyZb9fSBPmMAPOsGSh00MBKKYX50",
  s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-wew0l88wbiy3"
  },
  apiGateway: {
      REGION: "us-east-1",
      URL: "https://api.marcosdd.com/dev"
  },
  cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_BZ5lp8a3F",
      APP_CLIENT_ID: "7ad6b7kvj6a63sfa9ho304fe8q",
      IDENTITY_POOL_ID: "us-east-1:b38ae192-0678-4bb1-8e83-2d82f9fdf892"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_6SzfiGAyZb9fSBPmMAPOsGSh00MBKKYX50",
  s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-1m68rtfy5yvv1"
  },
  apiGateway: {
      REGION: "us-east-1",
      URL: "https://api.marcosdd.com/prod"
  },
  cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_yiVxSrbFF",
      APP_CLIENT_ID: "3f3q4j12b6bl90uqdrei1ou9kf",
      IDENTITY_POOL_ID: "us-east-1:36e36fea-540a-4f9a-ba0c-1eddab16f67e"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
