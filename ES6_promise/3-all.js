import { uploadPhoto, createUser } from './utils.js';
export default async function handleProfileSignup() {
  try {
    const results = await Promise.all([uploadPhoto(), createUser()]);
    const [photo, user] = results;
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch {
    console.log('Signup system offline');
  }
}
