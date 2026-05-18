import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import * as Sentry from "@sentry/react";
import { initializeFaro, getWebInstrumentations } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

console.log("App starting...");

// ✅ 1. Initialize Sentry first
Sentry.init({
  dsn: "https://4da8af6190c6746c2624f375cfb70287@o4511410584354816.ingest.us.sentry.io/4511410587828224",
  tracesSampleRate: 1.0,
});

// ✅ 2. Initialize Grafana Faro immediately after
initializeFaro({
  url: "https://faro-collector-prod-ap-south-1.grafana.net/collect/1d32ed1bdeb2c35b1da5f7abcbdaee5d",

  app: {
    name: "iosandweb",
    version: "1.0.0",
    environment: "local",
  },

  instrumentations: [
    ...getWebInstrumentations(),
    new TracingInstrumentation(),
  ],
});

// ✅ 3. THEN render React
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();