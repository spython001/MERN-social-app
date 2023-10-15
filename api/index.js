const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const cors = require("cors");
const multer  = require("multer");
const path = require("path");

app.use(cors());
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable cookies and credentials
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

/*const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend origin
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.options('*', cors());

app.use(cors({ origin: '*' })); */


dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {console.error(err);});


//for path
app.use("/images", express.static(path.join(__dirname, "public/images")));

//MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,"public/images");
    },
    filename:(req,file,callback)=>{
        callback(null, file.originalname);
    }
})

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) =>{
    try {
       return res.status(200).json("File uploaded successfully");
    } catch (err) {
        console.error(err);
        return res.status(500).json("internal server error");
    }
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.listen(8800, () => {
    console.log("Backend server is running...")
});