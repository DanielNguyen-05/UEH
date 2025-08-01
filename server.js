const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const path = require("path");
const app = express();
const port = 3000;

// Truyền routes
const mainRoutes = require('./routes/mainRoutes');

// Thiết lập thư mục views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); 

// Thiết lập layout
app.use(expressLayouts);
app.set('layout', 'layouts/default');

// Thiết lập thư mục public - thư mục chứa các file tĩnh của Frontend
app.use(express.static(path.join(__dirname, "public")));

// Sử dụng các Routes đã định nghĩa
app.use('/', mainRoutes); 

// Xử lý lỗi chung
app.use((err, req, res, next) => {
    console.error(err.stack);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});