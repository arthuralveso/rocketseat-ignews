/* eslint-disable import/prefer-default-export */
import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});
