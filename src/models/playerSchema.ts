import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  username: String,
  userId: String,
  compRank: String,
  compHs: Number,
});

const Player =
  mongoose.models.playerSchema || mongoose.model("players", playerSchema);

export default Player;
