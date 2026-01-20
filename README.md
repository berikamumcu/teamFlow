# SaaS Admin Panel (React + Django REST)

Bu proje, **React ** ve **Django REST Framework** kullanılarak geliştirilmiş
basit bir **SaaS tarzı admin panelidir**.

Amaç; gerçek hayatta kullanılan admin dashboard yapısını simüle ederek  
**Frontend–Backend entegrasyonu**, **CRUD işlemleri** ve **REST API mantığını** pratik etmektir.

---

##  Özellikler

### Users
- Backend API üzerinden kullanıcıları listeleme
- Yeni kullanıcı ekleme (POST)
- Kullanıcı silme (DELETE)
- Kullanıcı arama (search)
- Frontend state + backend senkronizasyonu

###  Projects
- Proje oluşturma
- Projeyi kullanıcıya atama
- Proje listeleme
- Proje silme
- Project - User ilişkisi (ForeignKey)

###  UI
- Dark / Light mode
- Admin dashboard layout
- Sidebar navigasyon

---

##  Kullanılan Teknolojiler

### Frontend
- React
- Vite
- JavaScript (ES6+)
- CSS

### Backend
- Django
- Django REST Framework
- SQLite
- REST API

---

## API Endpoints

- `GET /api/users/`
- `POST /api/users/`
- `GET /api/projects/`
- `POST /api/projects/`
- `DELETE /api/projects/:id/`

---

##  Öğrenilenler
- REST API tasarımı
- Frontend–Backend veri akışı
- Django serializer & view mantığı
- React state yönetimi
- CRUD mantığı
