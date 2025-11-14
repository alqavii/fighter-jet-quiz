# Fighter Jet Identification Quiz

A Next.js quiz application that tests your ability to identify fighter jets from their silhouettes. The app flashes a silhouette for a brief moment (adjustable duration), and you must correctly identify the aircraft from a dropdown menu.

## Features

- **Flash Mechanism**: Silhouettes appear for a fraction of a second (adjustable from 100ms to 2000ms)
- **Comprehensive Jet Database**: Includes 35+ fighter jets from multiple countries:
  - American 4th, 4.5th, and 5th generation aircraft
  - British, European, French, and Swedish jets
  - Russian and Chinese aircraft
  - Both Air Force and Navy variants
- **Score Tracking**: Track your correct answers and overall performance
- **Adjustable Difficulty**: Slider to control how long silhouettes are displayed
- **Modern UI**: Beautiful gradient background with glassmorphism effects

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Image Management

### Using Generated Placeholder Silhouettes

The app comes with programmatically generated placeholder silhouettes. These are already created and ready to use.

### Getting Real Fighter Jet Images

To use real fighter jet silhouettes:

1. **Option 1: Use the Python script** (requires Python 3 and pip packages)
   ```bash
   pip install requests pillow beautifulsoup4
   python scripts/fetch_images.py
   ```

2. **Option 2: Manual download**
   - Place original images in `public/jets/original/`
   - Run the conversion script:
     ```bash
     npm run convert-silhouettes
     ```

3. **Option 3: Convert existing SVGs to PNGs**
   ```bash
     npm run convert-svg-to-png
   ```

### Image Conversion Scripts

- `npm run generate-silhouettes` - Generate SVG placeholder silhouettes
- `npm run convert-svg-to-png` - Convert SVG files to PNG format
- `npm run convert-silhouettes` - Convert original images to silhouettes (requires images in `public/jets/original/`)

## Fighter Jets Included

### American Aircraft
- **4th Gen**: F-15 Eagle, F-16 Fighting Falcon, F-14 Tomcat, F/A-18 Hornet, A-10 Thunderbolt II
- **4.5th Gen**: F/A-18E Super Hornet, F-15E Strike Eagle, F-15EX Eagle II
- **5th Gen**: F-22 Raptor, F-35A/B/C Lightning II

### British/European
- Eurofighter Typhoon, Panavia Tornado, Harrier Jump Jet

### French
- Dassault Rafale, Mirage 2000, Mirage F1

### Swedish
- Saab Gripen, Saab Viggen, JAS 39 Gripen

### Russian
- Su-27, Su-30, Su-33, Su-35, Su-57, MiG-29, MiG-31, MiG-35

### Chinese
- J-10, J-11, J-15, J-16, J-20, J-31

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Sharp** - Image processing
- **React Hooks** - State management

## Project Structure

```
fighter-jet-quiz/
├── app/
│   └── page.tsx          # Main page
├── components/
│   └── FighterJetQuiz.tsx # Quiz component
├── data/
│   └── fighterJets.ts    # Jet database
├── public/
│   └── jets/             # Jet silhouette images
├── scripts/
│   ├── convertToSilhouette.ts  # Convert images to silhouettes
│   ├── convertSVGtoPNG.ts      # Convert SVG to PNG
│   ├── generateSVGSilhouettes.js # Generate placeholder SVGs
│   ├── fetch_images.py          # Fetch images from Wikipedia
│   └── downloadImages.js        # Download images (alternative)
└── package.json
```

## Customization

### Adding New Fighter Jets

Edit `data/fighterJets.ts` and add new entries:

```typescript
{ 
  id: 'jet-id', 
  name: 'Jet Name', 
  country: 'Country', 
  generation: '4th Gen', 
  branch: 'Air Force', 
  imagePath: '/jets/jet-id.png' 
}
```

Then add the corresponding image to `public/jets/jet-id.png`.

### Adjusting Flash Duration

The flash duration slider ranges from 100ms to 2000ms. You can modify these limits in `components/FighterJetQuiz.tsx`:

```typescript
min="100"
max="2000"
step="50"
```

## License

MIT
