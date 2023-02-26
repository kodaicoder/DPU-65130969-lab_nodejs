const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");

const fullname = "Hello API ,65130969 ณัชพล เมฆลาย";
//  data
const products = [
  {
    id: "1",
    name: "Apple Watch series 8",
    category: "Apple",
    price: 15000,
    cover:
      "https://www.flashfly.net/wp/wp-content/uploads/2022/05/FTX1B5hWIAA6GRr-2-800x600.jpeg",
  },
  {
    id: "2",
    name: "Iphone 14 PRO",
    category: "Apple",
    price: 35000,
    cover:
      "https://promotions.co.th/wp-content/uploads/2022/09/iphone14-pro-max.jpg",
  },
  {
    id: "3",
    name: "จอมอนิเตอร์ 27นิ้ว จอคอม 75HZ หน้าจอโค้ง จอเกมมิ่ง LED Gaming monitor จอมอนิเตอร์เกมมิ่ง VGA HDMI จอมอนิเตอ สปอตสินค้า",
    category: "LG",
    price: 5600,
    cover:
      "https://www.techmoblog.com/uploads/content_images/201610/img_1476165152_81877887513b.jpg",
  },
  {
    id: "4",
    name: "HEADSET (หูฟัง) ONIKUMA K9 - 3.5 MM (PINK)",
    category: "ONIKUMA ",
    price: 990,
    cover:
      "https://www.jib.co.th/img_master/product/original/20210803092821_41661_66_1.jpg",
  },
  {
    id: "5",
    name: "Apple iPad Gen 9 | iStudio by copperwired",
    category: "Apple",
    price: 12900,
    cover:
      "https://store.ais.co.th/media/catalog/product/i/p/ipad_10.2_inch_wi-fi_space_gray_pdp_image_position-1b__th_2.jpg",
  },
  {
    id: "6",
    name: "Marshall Speaker | WOBURN III",
    category: "Marshall",
    price: 699,
    cover:
      "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwf79a2925/images/marshall/speakers/woburn-iii/desktop/black/marshall-woburn-iii-black-01.png?sw=1120&sh=1120&sm=fit",
  },

  {
    id: "7",
    name: "Marshall Headphones | MONITOR II A.N.C. DIAMOND JUBILEE",
    category: "Marshall",
    price: 439,
    cover:
      "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dwe32c7bdb/images/marshall/headphones/monitor-ii-anc-diamond-jubilee/large/Diamond-Jubilee_Product-Page_Image-Carousel_Monitor-II-ANC_01_Desktop.png?sw=1120&sh=1120&sm=fit",
  },
  {
    id: "8",
    name: "Marshall Headphones | MOTIF A.N.C. DIAMOND JUBILEE",
    category: "Marshall",
    price: 259,
    cover:
      "https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw4c4ae860/images/marshall/headphones/motif-anc-diamond-jubilee/large/Diamond-Jubilee_Product-Page_Image-Carousel_Motif-ANC_01_Desktop.png?sw=1120&sh=1120&sm=fit",
  },
];

app.use(express.json(), cors());
// app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: fullname });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const result = products.find((product) => product.id === id);
  res.json(result);
});

app.listen(port, () => {
  console.log("Application is running on port 9000");
});
