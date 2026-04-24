import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  username: String,
  userId: String,
  compHs: Number,
});

const Player =
  mongoose.models.players || mongoose.model("players", playerSchema);

export default Player;
