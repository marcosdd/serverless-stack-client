const dev = {
  STRIPE_KEY: "pk_test_6SzfiGAyZb9fSBPmMAPOsGSh00MBKKYX50",
  s3: {
      REGION: "us-east-1",
      BUCKET: "mduarte-notes-app-uploads"
  },
  apiGateway: {
      REGION: "us-east-1",
      URL: "https://r15efw55be.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_heX3yg4Oc",
      APP_CLIENT_ID: "bu60l1spfl8fvatpemh64c2mb",
      IDENTITY_POOL_ID: "us-east-1:18a7093c-9566-43d3-bd02-a7853868f4fd"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_6SzfiGAyZb9fSBPmMAPOsGSh00MBKKYX50",
  s3: {
      REGION: "us-east-1",
      BUCKET: "mduarte-notes-app-uploads"
  },
  apiGateway: {
      REGION: "us-east-1",
      URL: "https://r15efw55be.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_heX3yg4Oc",
      APP_CLIENT_ID: "bu60l1spfl8fvatpemh64c2mb",
      IDENTITY_POOL_ID: "us-east-1:18a7093c-9566-43d3-bd02-a7853868f4fd"
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
