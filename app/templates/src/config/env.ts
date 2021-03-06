import * as dotenv from 'dotenv';
import MongoNotConnectedException from '../shared/exceptions/MongoNotConnectedException';

dotenv.config();

export default {
  server_port: process.env.PORT,
  mongodb_url: process.env.MONGO_URL,
  mongodb_database_name: process.env.MONGO_DB,
  mongodb_authsource: process.env.MONGO_AUTHSOURCE,
  mongodb_replset: process.env.MONGO_REPLSET,
  redis_url: process.env.REDIS_URL,
  onpremise_url: process.env.ONPREMISE_URL,
  onpremise_token: process.env.ONPREMISE_TOKEN,
  app_token: process.env.APPLICATION_TOKEN,
  service_auth: process.env.SERVICE_AUTH,
  rabbitmq_url: process.env.RABBITMQ_URL,
};
