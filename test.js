const connectDB = require('./db');
const User = require('./Schema/user');

const testUser = async () => {
  await connectDB();

  const user = new User({
    name: 'Yuvraj',
    username: 'yuvraj17',
    email: 'yuvraj@example.com',
    password: '12345678',
    role: 'student',
    universityRollNo: '22CS100'
  });

  await user.save();
  console.log('User saved successfully!');
};

testUser();
