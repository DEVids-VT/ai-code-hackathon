import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripeKey = import.meta.env.VITE_STRIPE_PK || '';
export const stripe = (await loadStripe(stripeKey)) as Stripe;
