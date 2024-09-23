export default function handleResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve({ status: 200, body: 'success' });
  })
    .then(console.log('Got a response from the API'))
    .catch(new Error({}));
}
