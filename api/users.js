import { response } from "express";

export default function users(server, mongoose) {

  const usersSchema = new mongoose.Schema({
    username: String,
    password: String
  });

  const User = mongoose.model('users', usersSchema);

  server.get('/api/users', async (req, res) => {
    try {
      res.status(200).json(await User.find());  // Använder Mongoose's "find"-metod för att hämta alla "users".
    } catch (error) {
      res.status(500).json({ message: "Något gick fel", error: error })
    }
  });

  server.get('/api/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id)

      res.status(200).json({ message: "Du försöker hämta en anvdändare", user: user })
    } catch (error) {
      res.status(500).json({ message: "Något gick fel", error: error })
    }
  })

  server.post('/api/users', async (req, res) => {
    try {

      const username = req.body.username
      const password = req.body.password

      if (username.length <= 0 || password.length <= 0) {
        res.status(400).json({ message: "Body måste innehålla username och password" })
      }

      const newUser = new User({
        username: username,
        password: password
      })
      console.log(newUser)

      const savedUser = await newUser.save()

      res.status(201).json({ message: "Du försöker skapa en ny användare", newUser: newUser, savedUser: savedUser })
    } catch (error) {
      res.status(500).json({ message: "Något gick fel", error: error })
    }
  })

  server.put('/api/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)

      res.json({ updatedUser: updatedUser })

    } catch (error) {
      res.status(500).json({ message: "Något gick fel", error: error })
    }
  })

  server.delete('/api/users/:id', async (req, res) => {
    try {
      const deleteddUser = await User.findByIdAndDelete(req.params.id)

      res.json({ deleteddUser: deleteddUser })

    } catch (error) {
      res.status(500).json({ message: "Något gick fel", error: error })
    }
  })

}