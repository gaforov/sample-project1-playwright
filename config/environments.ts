import * as dotenv from 'dotenv';
dotenv.config();

const env = process.env.ENV || 'qa'; 

const baseUrl =
  env === 'qa'
    ? process.env.QA_URL
    : process.env.DEV_URL;

export const envConfig = {
  baseUrl: baseUrl || 'https://practicetestautomation.com/practice-test-login/',
  defaultTimeout: Number(process.env.TIMEOUT) || 30000,
  isCI: process.env.CI === 'true',
};





