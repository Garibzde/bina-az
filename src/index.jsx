import { createRoot } from 'react-dom/client'
import './style.css'
import Card from './Card.jsx'

const elanlar = [
  { id: 1, image: "https://picsum.photos/400/300?random=1", price: 186400, title: "Sea breeze sky park", rooms: 4, area: 160, location: "Bakı", time: "bu gün 16:00" },
  { id: 2, image: "https://picsum.photos/400/300?random=2", price: 95000, title: "Yeni Yasamal qəsəbəsi", rooms: 2, area: 65, location: "Bakı", time: "bu gün 14:30" },
  { id: 3, image: "https://picsum.photos/400/300?random=3", price: 210000, title: "Port Baku Residence", rooms: 3, area: 120, location: "Bakı", time: "dünən 18:15" },
  { id: 4, image: "https://picsum.photos/400/300?random=4", price: 55000, title: "Xırdalan şəhəri", rooms: 1, area: 42, location: "Xırdalan", time: "bu gün 09:10" },
  { id: 5, image: "https://picsum.photos/400/300?random=5", price: 145000, title: "Nərimanov r-nu", rooms: 3, area: 90, location: "Bakı", time: "dünən 20:45" },
  { id: 6, image: "https://picsum.photos/400/300?random=6", price: 320000, title: "Gənclik metrostansiyası", rooms: 5, area: 210, location: "Bakı", time: "bu gün 11:20" },
  { id: 7, image: "https://picsum.photos/400/300?random=7", price: 78000, title: "Sumqayıt ş., 9-cu mkr", rooms: 2, area: 55, location: "Sumqayıt", time: "dünən 08:30" },
  { id: 8, image: "https://picsum.photos/400/300?random=8", price: 115000, title: "Əhmədli qəsəbəsi", rooms: 3, area: 85, location: "Bakı", time: "bu gün 15:00" },
  { id: 9, image: "https://picsum.photos/400/300?random=9", price: 450000, title: "Büllur Residence", rooms: 4, area: 180, location: "Bakı", time: "dünən 12:00" },
  { id: 10, image: "https://picsum.photos/400/300?random=10", price: 62000, title: "Masazır qəsəbəsi", rooms: 2, area: 50, location: "Masazır", time: "bu gün 10:05" },
  { id: 11, image: "https://picsum.photos/400/300?random=11", price: 275000, title: "Ağ Şəhər (White City)", rooms: 3, area: 130, location: "Bakı", time: "dünən 19:30" },
  { id: 12, image: "https://picsum.photos/400/300?random=12", price: 89000, title: "Hövsan qəsəbəsi", rooms: 3, area: 75, location: "Bakı", time: "bu gün 12:45" },
  { id: 13, image: "https://picsum.photos/400/300?random=13", price: 160000, title: "Nizami metrostansiyası", rooms: 3, area: 100, location: "Bakı", time: "dünən 16:20" },
  { id: 14, image: "https://picsum.photos/400/300?random=14", price: 105000, title: "Qarayev metrostansiyası", rooms: 2, area: 70, location: "Bakı", time: "bu gün 13:10" },
  { id: 15, image: "https://picsum.photos/400/300?random=15", price: 510000, title: "İçərişəhər", rooms: 5, area: 250, location: "Bakı", time: "dünən 09:50" },
  { id: 16, image: "https://picsum.photos/400/300?random=16", price: 135000, title: "Badamdar qəsəbəsi", rooms: 3, area: 110, location: "Bakı", time: "bu gün 17:25" }
];

createRoot(document.getElementById('root')).render(
  <>
  <div className="row">
    {elanlar.map((elan,i) => (<Card key={i} elan={elan} />))}
  </div>
  </>,
)
