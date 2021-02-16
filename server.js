const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models")
db.sequelize.sync();

db.sequelize.sync({ force: true}).then(() => {
  console.log("Drop and re-sync db");
});

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// content-type을 bodyParser가 암튼 해석해준다는듯
app.use(bodyParser.json());

// 암튼 둘다 bodyParser가 분류해준다는거같은데 흠터레스팅
app.use(bodyParser.urlencoded({ extended: true }));

// 간단한 라우팅(요청과 응답을 조정)
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Juyudang application." });
});

// 포트 설정해줌
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});