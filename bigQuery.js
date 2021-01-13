// Import the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');

const bigquery = new BigQuery();
const databaseName = ''
const ordersTableName = ''

const queryJob = async (query) => {
  console.log(`Job ${query} query.`);

  // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
  const options = {
    query: query,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query as a job
  const [job] = await bigquery.createQueryJob(options);
  console.log(`Job ${job.id} started.`);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();

  return rows
}
