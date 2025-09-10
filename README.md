# DaVinci Backend

DaVinci projesi için geliştirilmiş NestJS tabanlı backend API servisidir. Bu proje, kullanıcı yönetimi ve gönderi (post) işlemlerini sağlayan RESTful API endpoints'leri sunar.

## Özellikler

- **Kullanıcı Yönetimi**: Kullanıcı oluşturma, okuma, güncelleme ve silme işlemleri
- **Gönderi Yönetimi**: Post oluşturma, okuma, güncelleme ve silme işlemleri
- **CORS Desteği**: Frontend uygulaması için yapılandırılmış CORS ayarları
- **Event-Driven Architecture**: NestJS Event Emitter modülü ile olay tabanlı mimari
- **TypeScript**: Tam TypeScript desteği ile tip güvenliği
- **RESTful API**: Standart HTTP metodları ile API tasarımı

## Proje Yapısı

```
src/
├── users/           # Kullanıcı modülü
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.interface.ts
│   └── users.module.ts
├── posts/           # Gönderi modülü
│   ├── posts.controller.ts
│   ├── posts.service.ts
│   ├── posts.interface.ts
│   └── posts.module.ts
├── app.module.ts    # Ana uygulama modülü
└── main.ts          # Uygulama başlangıç noktası
```

## API Endpoints

### Kullanıcılar
- `GET /users` - Tüm kullanıcıları listele
- `GET /users/:id` - Belirli bir kullanıcıyı getir
- `POST /users` - Yeni kullanıcı oluştur
- `PUT /users/:id` - Kullanıcı bilgilerini güncelle
- `DELETE /users/:id` - Kullanıcıyı sil

### Gönderiler
- `GET /posts` - Tüm gönderileri listele
- `GET /posts/:id` - Belirli bir gönderiyi getir
- `POST /posts` - Yeni gönderi oluştur
- `PUT /posts/:id` - Gönderi bilgilerini güncelle
- `DELETE /posts/:id` - Gönderiyi sil

## Kurulum

Proje bağımlılıklarını yüklemek için:

```bash
npm install
```

## Geliştirme

```bash
# Geliştirme modunda çalıştırma
npm run start:dev

# Debug modunda çalıştırma
npm run start:debug

# Normal mod
npm run start
```

## Üretim

```bash
# Proje build etme
npm run build

# Üretim modunda çalıştırma
npm run start:prod
```

## Test

```bash
# Unit testler
npm run test

# E2E testler
npm run test:e2e

# Test coverage
npm run test:cov
```

## Render Deployment

Bu proje Render platformu için özel olarak yapılandırılmıştır. Render deployment için gerekli konfigürasyonlar:

### Otomatik Deployment
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start:prod`
- **Environment**: Node.js
- **Node Version**: 18.x veya üzeri

### Environment Variables
Render'da aşağıdaki environment variable'lar ayarlanmalıdır:

```
PORT=10000
NODE_ENV=production
```

### CORS Konfigürasyonu
Uygulama şu anda aşağıdaki frontend URL'i için CORS ayarlanmıştır:
- `https://da-vinci-frontend.vercel.app`

Farklı bir frontend URL'i kullanacaksanız, `src/main.ts` dosyasındaki CORS ayarlarını güncelleyin.

### Render Özellik Avantajları
- Otomatik HTTPS sertifikası
- Git tabanlı otomatik deployment
- Zero-downtime deployment
- Ücretsiz SSL sertifikası
- CDN desteği
- Otomatik scaling

### Deployment Adımları
1. GitHub repository'nizi Render'a bağlayın
2. Web Service olarak deploy edin
3. Build ve start komutlarını yukarıdaki gibi ayarlayın
4. Environment variable'ları tanımlayın
5. Deploy butonuna basın

## Teknolojiler

- **NestJS**: Node.js framework
- **TypeScript**: Tip güvenliği
- **Express**: HTTP server
- **RxJS**: Reactive programming
- **Jest**: Test framework

## Lisans

Bu proje UNLICENSED lisansı altındadır.
