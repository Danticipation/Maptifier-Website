# Running Maptifier on Your Phone + Projector (Screenshots & Demos)

Use this checklist to get the **Maptifier Android app** running so you can capture screenshots and record demos for the website.

**Maptifier app path:** `C:\My Applications\Maptifier` (Unity project)

---

## What You Need

### Hardware
- **Android phone or tablet** with **USB-C video out** (DisplayPort Alt Mode). Many recent Samsung, Google Pixel, OnePlus, and other flagship devices support this. Check your device specs for “USB-C to DisplayPort” or “video out.”
- **USB-C to DisplayPort cable** (or USB-C to HDMI if your projector uses HDMI; you may need an adapter).
- **Projector** (or external display) with DisplayPort or HDMI input.

### Software
- **Unity 6** or **Unity 2022 LTS** (to build the Maptifier project).
- **Android device** with USB debugging enabled (Settings → Developer options → USB debugging), for “Build and Run” from Unity.

---

## Step 1: Build and Install the Maptifier App (First Time)

Maptifier is a **Unity** project. You build the Android app from Unity, then install it on your phone.

1. **Install Unity**
   - Install [Unity 6](https://unity.com/download) or [Unity 2022 LTS](https://unity.com/releases/editor/whats-new/2022.2.0).
   - In the Unity Hub, add the **Android Build Support** module (OpenGL ES 3, Vulkan optional).

2. **Open the project**
   - In Unity Hub: **Add** → browse to `C:\My Applications\Maptifier` → select the folder (Unity will detect the project).
   - Open the project and wait for it to load.

3. **Switch to Android**
   - **File → Build Settings** (or Ctrl+Shift+B).
   - Select **Android** in the Platform list → **Switch Platform** (wait for reimport if needed).

4. **Build and run to your phone**
   - Connect your Android phone via USB. On the phone, enable **USB debugging** (Settings → Developer options).
   - In Build Settings, click **Build And Run**. Choose a folder for the output (e.g. `C:\My Applications\Maptifier\Builds`) and save the APK. Unity will build, install the app on the phone, and launch it.

   **Alternatively (install later):** Click **Build** only (no Run). Copy the generated APK to your phone and install it manually.

5. **Release builds (for store or demos)**
   - Follow `C:\My Applications\Maptifier\RELEASE_CHECKLIST.md` for version, signing, and AAB/APK options. For quick demos, the Build And Run APK is usually enough.

---

## Step 2: Connect Phone to Projector

1. **Connect** the USB-C end of the cable to your phone and the DisplayPort (or HDMI) end to the projector.
2. **Select the correct input** on the projector (DisplayPort or HDMI).
3. On the phone, you may get a prompt to allow display output or “second screen”; accept it. Some devices mirror the screen by default when a display is connected.

---

## Step 3: Run Maptifier and Capture Content

1. **Open the Maptifier app** on your phone.
2. **Load content** (image or video) and use the app’s warp/blend tools to align the output to the projection surface.
3. **Screenshots**
   - **Phone:** Use the device’s normal screenshot shortcut (e.g. Power + Volume Down). Capture both the phone UI and, if possible, the projected image (by photographing the projection surface with another camera).
   - **Projected image:** Use a second phone or camera to take photos of the projection on the wall/screen for “in the wild” demo shots.
4. **Screen recording**
   - **Phone:** Enable “Screen record” in Quick Settings (or Settings → Advanced features) and record while using Maptifier. This gives you in-app demos.
   - **Projection:** Record the projected output with a second device for real-world demo clips.

---

## Step 4: Use the Assets on the Website

- **Demos page:** Replace the placeholder video IDs in `src/app/demos/page.tsx` with your real YouTube or Vimeo links. Upload the screen recordings or projection clips, then paste the embed IDs.
- **Home / marketing:** Use the best screenshots as hero or feature images. You already have `Public/Assets/Maptifier-1.png`; add more to `public/Assets/` (e.g. `Maptifier-2.png`, `Maptifier-demo.png`) and reference them in the site.
- **Tutorials:** Use screenshots from the app in the tutorial steps in `src/app/tutorials/page.tsx` (you can add image components or links to hosted images).

---

## Quick Checklist

- [ ] Unity project opened from `C:\My Applications\Maptifier` and built for Android (Build And Run or Build → install APK)
- [ ] Maptifier app installed on Android device
- [ ] USB-C to DisplayPort (or HDMI) cable
- [ ] Projector powered on and set to correct input
- [ ] Phone connected; display output working
- [ ] App running with sample content and warp/blend applied
- [ ] Screenshots taken (phone UI + projection)
- [ ] Screen recording or projection video recorded
- [ ] Videos uploaded (e.g. YouTube) and IDs added to Demos page
- [ ] New images added to `public/Assets/` and used on the site where needed

---

## Troubleshooting: App shows only sky + ground (no UI)

If the app launches but you only see a default Unity view (blue sky, grey ground, no Maptifier interface), the build is using the wrong scene. The app needs a **Boot** scene that contains `AppBootstrapper` and the main UI; that scene is missing or not included in the build.

**Fix:** In the Maptifier app repo, open **`RUN_FIRST_TIME.md`** (at `C:\My Applications\Maptifier\RUN_FIRST_TIME.md`). It explains how to create the Boot scene in Unity and set it as the only scene in Build Settings, then rebuild.

---

If your device doesn’t support USB-C video out, the app won’t be able to drive the projector. Check the manufacturer’s specs or the Maptifier app README for supported devices.
