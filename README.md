# HyperCast - Digital Subscription Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-cyan)
![Node.js](https://img.shields.io/badge/Node.js-Serverless-green)

A modern, full-stack e-commerce application designed for managing and selling digital subscriptions. This project demonstrates a production-ready implementation of payment processing, transactional emails, and security best practices using a serverless architecture.

## 🚀 Features

### Core Functionality
-   **Dynamic Pricing & Plans**: Responsive pricing tables with toggleable monthly/yearly views.
-   **Secure Payments**: Integrated **PayPal Smart Buttons** for seamless checkout experiences.
-   **Instant Delivery**: Automated fulfillment workflow triggering transactional emails upon successful payment.

### Security & Performance
-   **Spam Protection**: Google **reCAPTCHA v2** integration to prevent bot abuse on contact forms.
-   **Serverless Backend**: API routes deployed on Vercel for scalable, cost-effective logic execution.
-   **Form Validation**: Robust client-side and server-side validation.

### Tech Stack
-   **Frontend**: React.js, TailwindCSS (Responsive Design), Lucide Icons.
-   **Backend**: Node.js (Serverless Functions), Resend SDK (Email Infrastructure).
-   **Deployment**: Vercel (CI/CD).

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/hypercast-platform.git
    cd hypercast-platform
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root directory and add the following keys:
    ```env
    # Payment Processing
    VITE_PAYPAL_CLIENT_ID=your_paypal_client_id

    # Email Infrastructure (Resend)
    RESEND_API_KEY=your_resend_api_key

    # Security (Google reCAPTCHA)
    VITE_RECAPTCHA_SITE_KEY=your_google_site_key
    RECAPTCHA_SECRET_KEY=your_google_secret_key
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 📧 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/send-email` | Triggers transactional email after successful payment. |
| `POST` | `/api/contact` | Handles support form submissions with captcha verification. |

## 🛡️ License

This project is open source and available under the [MIT License](LICENSE).
