##
## Tools Requirements for Mac

- Visual Studio Code
- Node Js v18.15.0.
- Homebrew 4.0.21
- Android Studio
- Android SDK (https://developer.android.com/about/versions/14/setup-sdk)
- Android Device or Emulator
- IOS Device or Simulator
- Xcode
- Flipper (https://fbflipper.com/)
- Git Fork (https://git-fork.com/)
- Open VPN (https://openvpn.net/client-connect-vpn-for-mac-os/)

## Environment

Untuk saat ini terdapat 3 environment, berikut bentuk setiap environment:

- Development (.env.development)

- Pre Production (.env.preprod)

- Production (.env.production)

- Staging (.env.staging)

```
ENV_MODE={ENV_NAME}
MINI_GAMES=string url
BASEURL=string url
LINK_LANGGANAN=string url
ENABLE_SCREENSHOT=boolean
ZOOM_WEBVIEW_URL=string url
LIVEKIT_URL=string url
```

## How To Run App on

### Android Device

- Lakukan panduan instalasi react native https://reactnative.dev/docs/0.72/getting-started
- Clone repository, dan checkout ke branch yang dituju
- Jalankan perintah berikut:

```
npm install
```

- Jikalau ada kendala, jalankan perintah berikut:

```
npm install --force
```

- Pilih emulator yang tersedia atau bisa gunakan perangkat langsung
- Jalankan perintah berikut:

### Environment Development

```
npm run android:dev
or
make menu
5
```

### Environment Production

```
npm run android
or
make menu
4
```

### IOS Device

- Lakukan panduan instalasi react native https://reactnative.dev/docs/0.72/getting-started
- Clone repository, dan checkout ke branch yang dituju
- Jalankan perintah berikut:

```
npm install
```

- Jikalau ada kendala, jalankan perintah berikut:

```
npm install --force
```

- Jalankan perintah berikut:

```
cd ios
pod install
```

- Buka aplikasi xcode

## Environment Development

```
Pilih scheme 'KelasPintar (development)'
```

## Environment Production

```
Pilih scheme 'KelasPintar'
```

- Pilih simulator yang tersedia atau bisa menggunakan perangkat langsung
- Lalu klik tombol run yang terdapat pada xcode

## How To Versioning

- Checkout ke branch set version (cth. patch/set-version-v4.0.42)
- Menaikan **version** pada package.json
- Menaikan **version** pada package-lock.json
- Menaikan **versionName** dan **versionCode** pada app/build.gradle
- Menaikan **CFBundleShortVersionString** dan **CFBundleVersion** pada ios/KelasPintar/Info.plist
- Menaikan **CURRENT_PROJECT_VERSION** dan **MARKETING_VERSION** pada ios/KelasPintar.xcodeproj/project.pbxproj
- Menaikan **CFBundleShortVersionString** dan **CFBundleVersion** pada ios/KelasPintarTests/Info.plist

## How To Build (.apk)

### Environment Development

- Checkout ke branch yang di tuju
- Jalankan perintah berikut:

```
pull branch
npm run build:android:dev
```

Atau bisa juga dengan cara:

```
pull branch
make menu
7
```

- APK dapat dilihat di android/app/build/outputs/apk/release/app-release.apk

### Environment Production

- Checkout ke branch yang di tuju
- Jalankan perintah berikut:

```
pull branch
npm run build:android:release
```

Atau bisa juga dengan cara:

```
pull branch
make menu
6
```

## How To Build (.aab)

- generate .keystore untuk production terlebih dahaulu. Lakukan panduan generate keystore (https://medium.com/geekculture/react-native-generate-apk-debug-and-release-apk-4e9981a2ea51), terkait kredential data seperti **MYAPP_UPLOAD_STORE_FILE, MYAPP_UPLOAD_KEY_ALIAS, MYAPP_UPLOAD_STORE_PASSWORD, MYAPP_UPLOAD_KEY_PASSWORD** bisa langsung ditanyakan ke technical lead, atau project manager langsung
- generate release bundle .aab file. Jalankan perintah berikut:

### Environment Development

```
npm run bundle:android:dev
or
make menu
9
```

### Environment Production

```
npm run bundle:android:release
or
make menu
8
```

## How To Build (.ipa)

### Environment Development

- Checkout ke branch yang di tuju
- Jalankan perintah berikut:

```
pull branch
npm run build:ios
```

- Buka project KelasPintar.xcworkspace di Xcode
- Pilih scheme 'KelasPintar (development)'
- Pilih 'Any iOS Device'
- Pilih Archive pada menu Product di menu bar

### Environment Production

- Checkout ke branch yang di tuju
- Jalankan perintah berikut:

```
pull branch
npm run build:ios
```

- Buka project KelasPintar.xcworkspace di Xcode
- Pilih scheme 'KelasPintar'
- Pilih 'Any iOS Device'
- Pilih Archive pada menu Product di menu bar

### App Publishing

- Setelah archive berhasil, klik opsi 'Distribute App'

1. **Untuk QA Testing**
   - Pilih opsi 'Ad Hoc' untuk export file .ipa
   - Publish file .ipa ke Firebase App Distribution
2. **Untuk App Update**
   - Pilih opsi 'App Store Connect' untuk publish aplikasi ke Test Flight

## Rules

#### Branch Naming

Untuk penamaan branch pada repository kelas pintar ini terdapat 3 jenis yaitu

- **bugfix**\
  branch yang berisikan **hasil fixing tiket bug** dari setiap developer disertai dengan nomor tiket dan judul tiket dipisah dengan "/", (cth. **bugfix/KR-90812/Anak Saya - Aktivitas Anak**)

- **patch**\
  branch yang berisikan **hasil fixing tiket bug darurat yang tidak disertai nomor tiket**, (cth. **patch/Anak Saya - Aktivitas Anak**)

- **feature**\
  branch yang berisikan **hasil pengerjaan setiap fitur** dari masing - masing developer, (cth. **feature/KR-90812/Anak Saya - Aktivitas Anak**)

### **Page Structure**

Harus berbentuk folder, dan diakhir dengan akhiran Screen (cth. ProfileScreen) yang berisikan

- **index.tsx**
  berisikan semua tampilan data yg didapat dari endpoint seperti _View, Button, Text,_ dll
- **style.tsx**
  berisikan semua data untuk mengubah gaya tampilan seperti _fontSize, fontWeight, height, width,_ dll
- **folder component**
  jika didalam index terdapat banyak widget maka harus dipisah kedalam beberapa file dan disatukan kedalam folder component

### Code Format

Semua developer mobile harus mengikuti standar yang telah di tetapkan, seperti dibawah ini:

1. **Spacing harus 2 spaces**\
   Spacing terlalu rapat akan sulit dibaca, lebih baik menggunakan indent space 2 pada visual studio code

2. **Wajib Chaining Optional (?.)**\
   _chaining optional_ digunakan untuk memastikan data yang kita terima harus ada, selain dari undefined ataupun null, oleh karna itu chaining ini sangat berguna agar aplikasi tidak crash atau force close ketika dijalankan

3. **Dilarang inline style**\
   Code menggunakan inline style akan menambah baris code yang dapat menambah ukuran aplikasi, membuat code terlihat tidak rapih dan sulit untuk di maintain kedepannya

4. **Console log dilarang aktif**\
   Semua console log harus dihapus atau dicomment, untuk memastikan data kelas pintar agar tetap aman

5. **Logic UI wajib menggunakan trenary**\
    Jika Logic UI tidak menggunakan trenary akan menyebabkan crash atau force close pada aplikasi, jadi untuk menanganinya diwajibkan trenary di setiap logic UI

   ```
   // Don't do this
   {isShowWidget && (
      <View>
          <Text>{'Hello World'}</Text>
      </View>
   )}
   ```

   ```
   // Do this instead
   {isShowWidget ? (
      <View>
          <Text>{'Hello World'}</Text>
      </View>
   ) : null}
   ```

6. **Wajib kutip satu**\
   Pakai kutip satu (' ') dari pada kutip dua (" ") untuk string

7. **Wajib gunakan logical OR (||) dari pada nullish coalecing operator (??)**\
   Penggunaan nullish coaleacing (??) hanya menjalankan yang sisi kanan atau nilai default jikalau dari sisi kiri bernilai undefined atau null, sedangkan logical or (||) akan menjalankan sisi kanan atau nilai default jika nilai sebelah kiri bernilai selain true seperti null, undefined, false, value.length == 0, value == '', dll.

8. **Destructure code**\
    Untuk import fuction dan variable dari props, state, atau route di destructure dulu, jadi tidak perlu menggunakan props, state, route langsung, misal:

   ```
   // Don't do this
   const fullName = route?.params?.full_name;
   const age = route?.params?.age;
   ```

   ```
   // Do this instead
   const { fullName, age } = route?.params || false;
   ```

## Documentation

### Design

Semua design di proyek kelas pintar bisa diakses melalui link figma berikut:

- Murid B2C\
  https://www.figma.com/file/MfighEgDdsfcrRaSxx0nm2/%5BKP-Revamp%5D-Murid-B2C%E2%9B%93%EF%B8%8F?t=pSTmDkpjSR8pzS5C-1

- Murid B2B\
  https://www.figma.com/file/iu2goC7vFYyYBeT2wD1Aiy/%5BKP-Revamp%5D-Murid-B2B-%F0%9F%8C%8B?t=pSTmDkpjSR8pzS5C-1

- Guru B2B\
  https://www.figma.com/file/Ma1wA16dNdfPwKyKkcLN2g/%5BKP-Revamp%5D-Guru-B2B-%E2%AD%90%EF%B8%8F?t=pSTmDkpjSR8pzS5C-7

- Guru Ahli\
  https://www.figma.com/file/SQ9oOyzsZzMTVft7T3LxBo/%5BKP-Revamp%5D-Guru-Ahli-%F0%9F%8C%8F?t=pSTmDkpjSR8pzS5C-7

- Admin B2B\
  https://www.figma.com/file/a4L0F6FSJk2mtr81DG7aVv/%5BKP-Revamp%5D-Admin-B2B-%F0%9F%91%B7%F0%9F%8F%BC%E2%80%8D%E2%99%80%EF%B8%8F?t=pSTmDkpjSR8pzS5C-7

- Kepsek B2B\
  https://www.figma.com/file/jTmbGOMUPcjuZq665YwTnY/%5BKP-Revamp%5D-Kepsek-B2B-%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%8F%AB?t=pSTmDkpjSR8pzS5C-7

- Orang Tua\
  https://www.figma.com/file/cxE7xCIdTGEaJLDaTOJQqt/%5BKP-Revamp%5D-Orang-Tua-%F0%9F%91%A8%F0%9F%8F%BF%E2%80%8D%F0%9F%A6%B0?t=pSTmDkpjSR8pzS5C-7

- Design System\
  https://www.figma.com/file/63A3TviZIXbLE7osWdbxrH/%5BKP%5D-Design-System?t=pSTmDkpjSR8pzS5C-7

### Endpoint

Semua data dari backend termasuk endpoint (API) bisa di akses melalui https://api-docs.kelaspintar.co.id/ menggunakan VPN yang disediakan kelas pintar

### Account

Semua data akun untuk testing pada environment development bisa menggunakan akun berikut, dengan password bisa ditanyakan langsung kepada technical lead atau project manager langsung

- Orang Tua\
  marno@gmail.com, hardjo@gmail.com

- Murid B2B\
  brama@gmail.com

- Murid B2C\
  fikriyanuar@gmail.com

- Guru\
  guru_brama@gmail.com

- Kepala Sekolah\
  kepsek38@gmail.com

- Admin\
  dino@gmail.com

### Component

Terkait dokumentasi setiap komponen bisa di akses menggunakan VPN yang disediakan kelas pintar, berikut data dokumentasi komponen:

- Website: https://mobile-docs.kelaspintar.dev
- Repository: https://gitlab.kplabs.id/kp/mobile/kp-mobile-docs
