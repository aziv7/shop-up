import mongoose from 'mongoose';

export async function initMongoose() {
  try {
    if (mongoose.connection.readyState === 1)
      return mongoose.connection.asPromise();

    return await mongoose.connect(process.env.DB);
  } catch (error) {
    console.log(error);
  }
}
