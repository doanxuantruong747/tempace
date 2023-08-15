import tiviGold from "@/assets/products/image-hero1.png";
import tiviDetail1 from "@/assets/products/detail1-1.jpg";
import tiviDetail2 from "@/assets/products/detail2-2.jpg";
import tiviDetail3 from "@/assets/products/detail3-3.jpg";

import tiviDen from "@/assets/products/card3.png";
import banTron from "@/assets/products/ban.jpg";
import ghe from "@/assets/products/ghe.jpg";
import tu from "@/assets/products/tu.png";


export const products = [
  {
    id: 1,
    name: "Tivi Woolpad - Viền Vàng",
    category: "thiết bị điện tử",
    categoryProduct: "tivi",
    price: 9228450,
    priceSale: 8389500,
    race: 5,
    inch: "50inch",
    unit: "",
    describe: "Màn hình 4K, chất lượng hình ảnh 12k. Hình ảnh chân thực như cuộc sống, trải nghiệm tận mắt thắng cảnh",
    img: [tiviGold, tiviDetail1, tiviDetail2, tiviDetail3],
    listDetailImg: [],
  },
  {
    id: 2,
    name: "Tivi Woolpad - Đen",
    category: "thiết bị điện tử",
    categoryProduct: "tivi",
    price: 9228450,
    priceSale: 8389500,
    race: 5,
    unit: "",
    describe: "Trải nghiệm chất lượng âm thanh mạnh mẽ khi TV hòa âm cùng soundbar. Âm thanh vòm chuẩn điện ảnh ngay tại nhà",
    img: [tiviDen]
  },

  {
    id: 4,
    name: "Ghế Sofa - WoodpadSofa",
    category: "nội thất",
    price: 0,
    priceSale: 0,
    race: 5,
    unit: "",
    describe: "Ghế Sofa Bed Phong Cách Châu Âu Tối Giản Của WoolpadSofa",
    img: [ghe]
  },
  {
    id: 3,
    name: " Bàn Phòng Khách",
    category: "nội thất",
    price: 0,
    priceSale: 0,
    race: 5,
    unit: "",
    describe: "",
    img: [banTron]
  },
  {
    id: 5,
    name: "Tủ Phòng Khách",
    category: "nội thất",
    price: 0,
    priceSale: 0,
    race: 5,
    unit: "",
    describe: "",
    img: [tu]
  },




];
