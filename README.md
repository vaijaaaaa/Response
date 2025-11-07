# Response - AI Text Humanizer

Transform AI-generated text into natural, human-like writing. Perfect for job applications, emails, essays, and more.

## Features

- **Three Tone Options**: Casual, Professional, and Friendly writing styles
- **Powered by Google Gemini AI**: Advanced AI for natural text transformation
- **Real-time Processing**: Instant humanization of your AI-generated content
- **Privacy First**: Your API key is stored locally in your browser
- **Chat Interface**: Clean, intuitive chat-style interface like ChatGPT/Claude
- **Copy to Clipboard**: Easy copy functionality for humanized text
- **Minimal Design**: Clean black & white aesthetic

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Google Gemini API key (free from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vaijaaaaa/Response.git
cd Response
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Navigate to Chat**: Click "Get Started" or go to `/chat`
2. **Configure API Key** (Optional): Click "API Key" in navbar to add your personal Gemini API key
3. **Select Tone**: Choose between Casual, Professional, or Friendly
4. **Paste AI Text**: Enter your AI-generated text (max 5,000 characters)
5. **Get Results**: Receive natural, humanized text instantly
6. **Copy**: Use the copy button to save the result

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **AI**: Google Gemini AI (gemini-pro)
- **UI Components**: Custom components with Sonner for toasts
- **Font**: Space Grotesk

## Project Structure

```
response/
├── app/
│   ├── api/
│   │   └── humanize/
│   │       └── route.ts          # API endpoint for text humanization
│   ├── chat/
│   │   └── page.tsx               # Chat interface
│   ├── components/
│   │   ├── Navbar.tsx             # Navigation with API key config
│   │   ├── HeroSection.tsx        # Landing page hero
│   │   ├── HowItWorks.tsx         # Process explanation
│   │   ├── FAQ.tsx                # Frequently asked questions
│   │   └── Footer.tsx             # Footer with social links
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Landing page
├── public/                        # Static assets
├── .env.local                     # Environment variables (create this)
└── package.json                   # Dependencies
```

## API Key Configuration

You can use Response in two ways:

1. **Server-side API Key**: Add `GEMINI_API_KEY` to `.env.local` (default for all users)
2. **Client-side API Key**: Users can add their own API key via the "API Key" dropdown in the navbar (stored in localStorage)

## Features in Detail

### Tone Options

- **Casual**: Relaxed and conversational, perfect for friendly communications
- **Professional**: Formal and polished, ideal for business and job applications
- **Friendly**: Warm and approachable, great for general use

### How It Works

1. Paste your AI-generated text
2. Select your preferred tone
3. AI analyzes and understands context
4. Text is rewritten to sound natural
5. Quality check removes robotic patterns
6. Get perfectly humanized text

## Environment Variables

Create a `.env.local` file with:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your free API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

## Author

**Vaiju Patil**

- GitHub: [@vaijaaaaa](https://github.com/vaijaaaaa)
- LinkedIn: [Vaiju Patil](https://www.linkedin.com/in/vaiju-patil-585555310/)
