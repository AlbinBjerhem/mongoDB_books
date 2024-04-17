export default function users(server, mongoose) {

  const usersSchema = new mongoose.Schema({
    username: String  // Varje "user" kommer att ha ett "username".
  });

  const User = mongoose.model('users', usersSchema);

  server.get('/api/users', async (req, res) => {
    res.json(await User.find());  // Använder Mongoose's "find"-metod för att hämta alla "users".
  });
}