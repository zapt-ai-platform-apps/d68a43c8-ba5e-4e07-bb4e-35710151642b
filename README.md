# TAMTRADES

A subscription-based, cross-platform trading journal app inspired by Tradezella but enhanced with additional features such as social funding, social trading, mentorship, and more. This application is designed to help traders log, analyze, and improve their performance, while offering social and community-driven capabilities.

Below is a list of key user journeys for TAMTRADES, in recommended order:

1. [Onboarding](docs/journeys/onboarding.md) - Signing up and getting started with TAMTRADES  
2. [Dashboard Overview](docs/journeys/dashboard-overview.md) - Viewing trade summaries and performance metrics  
3. [Journal Trades](docs/journeys/journal-trades.md) - Recording and analyzing trades for better insights  

To see detailed step-by-step instructions for each user journey, click on the links above.

## External Services
• Sentry: Used for error logging on both front-end and back-end  
• Umami: Used for basic analytics and tracking  
• Progressier: Used to enable PWA capabilities  

## Required Environment Variables
Please create a file named ".env" in the root of this project with the following (example values shown):

COCKROACH_DB_URL=your_cockroach_url  
NPM_TOKEN=your_npm_token  
VITE_PUBLIC_APP_ID=your_app_id  
VITE_PUBLIC_APP_ENV=development  
VITE_PUBLIC_SENTRY_DSN=your_sentry_dsn  
VITE_PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id  

Replace the placeholder values with your credentials and relevant settings.
