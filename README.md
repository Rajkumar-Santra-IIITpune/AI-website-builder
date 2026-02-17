# AT Site Builder

An AI-powered website builder that allows users to generate, preview, and manage websites using natural language prompts.

## Features

- **AI Website Generation**: Create full websites from text descriptions using Gemini and OpenRouter.
- **Interactive Preview**: Real-time preview of generated code across different device sizes (Desktop, Tablet, Mobile).
- **Project Management**: Save, update, and manage multiple website projects.
- **Authentication**: User accounts and secure login via Better Auth.
- **Credit System**: Usage-based credit system for AI generations.
- **Payments**: Integration with Stripe for purchasing credits.
- **Deployment Ready**: Built for easy deployment on modern cloud platforms.

## Tech Stack

### Client
- **Framework**: React 19 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Server
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: PostgreSQL (via Prisma ORM)
- **Language**: TypeScript
- **Authentication**: Better Auth
- **AI Integration**: OpenAI SDK (compatible with OpenRouter & Gemini)
- **Payments**: Stripe

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database
- Stripe account (for payments)
- Gemini API Key & OpenRouter API Key

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd site-builder
    ```

2.  **Install Dependencies**:
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in `server/` and `client/` based on the examples below.

    **Server (`server/.env`):**
    ```env
    PORT=3000
    NODE_ENV=development
    DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
    BETTER_AUTH_SECRET="your_random_secret"
    BETTER_AUTH_URL="http://localhost:3000"
    OPENROUTER_API_KEY="your_openrouter_key"
    GEMINI_API_KEY="your_gemini_key"
    STRIPE_SECRET_KEY="your_stripe_secret_key"
    STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
    TRUSTED_ORIGINS="http://localhost:5173"
    ```

    **Client (`client/.env`):**
    ```env
    VITE_BASEURL="http://localhost:3000"
    ```

### Running Locally

1.  **Start the Server**:
    ```bash
    cd server
    npx prisma generate
    npx prisma migrate dev
    npm run server
    ```
    The server will run on `http://localhost:3000`.

2.  **Start the Client**:
    ```bash
    cd client
    npm run dev
    ```
    The client will run on `http://localhost:5173`.

## Deployment

Refer to [deployment_guide.md](./deployment_guide.md) for detailed deployment instructions on Railway (Server) and Vercel (Client).

## License

ISC
