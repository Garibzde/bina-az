import { createRoot } from 'react-dom/client'
import './style.css'
import Card from './Card.jsx'



const elanlar = [
  { image: 'https://bina.azstatic.com/uploads/o460x345/2025%2F08%2F20%2F14%2F42%2F50%2F47d36e3e-c19b-4224-9f4a-2a264900bc15%2F92313_wLbwyJGJi75X1LikQGRJwg.jpg', price: 186400, title: "Sea breeze sky park", rooms: 4, area: 160, location: "Bakı", time: "bu gün 16:00" },
  { image: "./assets/img/yasamal.jpg", price: 95000, title: "Yeni Yasamal qəsəbəsi", rooms: 2, area: 65, location: "Bakı", time: "bu gün 14:30" },
  { image: "https://bina.azstatic.com/uploads/f460x345/2026%2F02%2F12%2F17%2F09%2F12%2Fea6fe857-47b9-45b3-8529-830ebd3c7240%2F24706_bKBx_2G36qDH1uzSs0FVxA.jpg", price: 210000, title: "Port Baku Residence", rooms: 3, area: 120, location: "Bakı", time: "dünən 18:15" },
  { image: "https://bina.azstatic.com/uploads/f460x345/2026%2F01%2F23%2F16%2F04%2F16%2Ff742d0c9-76e9-433a-a3b2-2c0d34d630a5%2F60542_GqGUFgPrMrLR6xvyGZJ1eg.jpg", price: 55000, title: "Xırdalan şəhəri", rooms: 1, area: 42, location: "Xırdalan", time: "bu gün 09:10" },
  { image: "./assets/img/ev.jpg", price: 145000, title: "Nərimanov r-nu", rooms: 3, area: 90, location: "Bakı", time: "dünən 20:45" },
  { image: "./assets/img/ganclik.jpg", price: 320000, title: "Gənclik metrostansiyası", rooms: 5, area: 210, location: "Bakı", time: "bu gün 11:20" },
  { image: "https://bina.azstatic.com/uploads/f460x345/2026%2F02%2F27%2F15%2F06%2F07%2F1325ca3c-83f8-49d3-8e64-0953e55430b8%2F39918_UtC2uw2jf5sH5IkJbM7eMQ.jpg", price: 78000, title: "Sumqayıt ş., 9-cu mkr", rooms: 2, area: 55, location: "Sumqayıt", time: "dünən 08:30" },
  { image: "./assets/img/ev.jpg", price: 115000, title: "Əhmədli qəsəbəsi", rooms: 3, area: 85, location: "Bakı", time: "bu gün 15:00" },
  { image: "./assets/img/ganclik.jpg", price: 450000, title: "Büllur Residence", rooms: 4, area: 180, location: "Bakı", time: "dünən 12:00" },
  {  image: "https://bina.azstatic.com/uploads/f460x345/2026%2F02%2F19%2F13%2F51%2F16%2F30b6789d-e080-4545-9c6e-f35557f9693d%2F64134_Mzmfuq9Bk4wj-MTyAhjjeA.jpg", price: 62000, title: "Masazır qəsəbəsi", rooms: 2, area: 50, location: "Masazır", time:"bu gün 10:05" },

  {  image: "./assets/img/ev.jpg", price: 89000, title: "Hövsan qəsəbəsi", rooms: 3, area: 75, location: "Bakı", time: "bu gün 12:45" },
  {  image: "./assets/img/ev.jpg", price: 160000, title: "Nizami metrostansiyası", rooms: 3, area: 100, location: "Bakı", time: "dünən 16:20" },
  {  image: "./assets/img/ev.jpg", price: 105000, title: "Qarayev metrostansiyası", rooms: 2, area: 70, location: "Bakı", time: "bu gün 13:10" },
  {  image: "./assets/img/ganclik.jpg", price: 510000, title: "İçərişəhər", rooms: 5, area: 250, location: "Bakı", time: "dünən 09:50" },
  {  image: "./assets/img/yasamal.jpg", price: 135000, title: "Badamdar qəsəbəsi", rooms: 3, area: 110, location:"Bakı", time:"bu gün 17.3" }
];

createRoot(document.getElementById('root')).render(
  <>
  <div className="row">
    {elanlar.map((elan,i) => (<Card key={i} elan={elan} />))}
  </div>
  </>,
)
