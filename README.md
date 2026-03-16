# Orbacle Web

Mistik bir kehanet uygulaması - Magic 8-Ball'dan ilham alınarak geliştirilmiş interaktif web deneyimi.

## Proje Hakkında

Orbacle, kullanıcıların sorularına mistik bir küre aracılığıyla cevap aldığı bir fal/kehanet uygulamasıdır. Animasyonlu bir küre arayüzü, soru geçmişi takibi ve çoklu dil desteği sunar.

## Teknolojiler

- **React 18** - UI framework
- **TypeScript 5** - Tip güvenliği
- **Vite 5** - Build tool ve dev server
- **Framer Motion 11** - Animasyonlar
- **i18next** - Çoklu dil desteği (Türkçe/İngilizce)

## Özellikler

- Animasyonlu mistik küre arayüzü
- 20 farklı kehanet cevabı
- Soru-cevap geçmişi (localStorage'da saklanır, max 50 kayıt)
- Türkçe ve İngilizce dil desteği
- Karanlık tema, mistik görsel efektler
- Responsive tasarım

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılacaktır.

## Diğer Komutlar

```bash
# Prodüksiyon build
npm run build

# Build önizleme
npm run preview

# Lint kontrolü
npm run lint
```

## Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── MysticalOrb      # Animasyonlu küre
│   ├── AnswerCard       # Cevap kartı
│   ├── QuestionInput    # Soru girişi
│   ├── HistoryPanel     # Geçmiş paneli
│   └── LanguageSwitcher # Dil değiştirici
├── utils/               # Yardımcı fonksiyonlar
│   ├── getRandomAnswer  # Rastgele cevap seçici
│   └── history          # Geçmiş yönetimi
├── i18n/                # Dil dosyaları
│   ├── en.json          # İngilizce
│   └── tr.json          # Türkçe
├── styles/              # CSS dosyaları
├── App.tsx              # Ana uygulama bileşeni
└── main.tsx             # Giriş noktası
```

## Tarayıcı Desteği

Uygulama tamamen istemci tarafında çalışır. localStorage desteği olan modern tarayıcılarda sorunsuz çalışır.
