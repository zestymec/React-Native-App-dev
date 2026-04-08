# 🚀 React Native Core Fundamentals | M Umer Aziz

Welcome to my React Native exploration project! Is repository mein maine Mobile App Development ke core foundations ko implement kiya hai, specifically focusing on components architecture, system hooks, and dynamic styling.

---

## 📱 Project Highlights

Is project mein do main implementations shamil hain:

* **Dynamic Theming (`Apppro.tsx`):** Aik smart component jo system ke **Dark/Light Mode** ko detect karta hai aur UI colors ko real-time mein adjust karta hai.
* **Structural Layout (`App.tsx`):** React Native ke basic building blocks (`View`, `Text`, `SafeAreaView`) ka istemal.

---

## 🏗️ Technical Architecture

### 1️⃣ `index.js` (The Entry Point)
Ye file hamari application ka JS entry point hai. Native system isi file ke zariye bundle load karta hai.
* **Logic:** Humne `AppRegistry.registerComponent` ka use kiya hai taake `Apppro` hamara root component ban jaye.

### 2️⃣ `Apppro.tsx` (Logic & Styling)
Yahan advanced concepts apply kiye gaye hain:
* **`useColorScheme()` Hook:** Pixel 7 ke system appearance settings ko read karne ke liye.
* **Ternary Operator Logic:** ```javascript
    style={isDarkmode ? Style.textblack : Style.textwhite}
    ```
    *Ye logic ensure karti hai ke text hamesha readable rahe, chahe mode light ho ya dark.*
* **Flexbox Layout:** `alignItems: 'center'` aur `justifyContent: 'center'` ka istemal karke content ko screen ke markaz (center) mein laya gaya hai.

### 3️⃣ `App.tsx` (Base Component)
* **`<SafeAreaView>`**: Iska use isliye kiya gaya hai taake content Pixel 7 ke camera punch-hole ya status bar ke niche na chhupay.
* **`<View>`**: Aik flexbox container jo layout ko organize karta hai.

---

## 🛠️ Tech Stack

| Feature | Technology |
| :--- | :--- |
| **Framework** | React Native (v0.74.0) |
| **Environment** | macOS / VS Code |
| **Hardware** | Google Pixel 7 (Physical Device) |
| **Language** | TypeScript (.tsx) |

---

💡 Key Takeaways
✅ React Native mein mobile-specific components kaise kaam karte hain.

✅ Physical device (Pixel 7) par wireless aur wired debugging ka experience.

✅ Dark Mode compatibility aur dynamic theme management.

