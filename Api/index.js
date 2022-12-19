import { app } from "./routes/index.js";

const PORT = 3001

app.listen(PORT, () => {
  console.log("%s listening at ", PORT);
});