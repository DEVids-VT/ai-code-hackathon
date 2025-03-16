import { axiosInstance } from '@/components/common/axios-interceptor/AxiosInterceptor';
import FlameButton from '@/components/FlameButton';
import ProgressIndicator from '@/components/ProgressIndicator';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { useToastNotification } from '@/hooks/useToastNotification';
import { useUserCredentials } from '@/hooks/useUserCredentials';
import { stripePromise } from '@/lib/stripe';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Checkout = () => {
  const { user } = useUserCredentials();
  const { setStage, addCompletedStep } = useOnboarding();
  const [isLoading, setIsLoading] = useState(false);
  const { emitToast } = useToastNotification();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payment = async () => {
      try {
        const response = await axiosInstance.post(
          'https://hoteach.azurewebsites.net/api/PaymentSession?',
          {
            UserId: user.userId,
            Email: user.email,
            Username: user.name,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const session = response.data;
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });

        if (error) {
          emitToast('Stripe Checkout Error:', 'error');
        } else {
          emitToast(
            'Payment successful! Check your email for the activation link.',
            'success'
          );

          addCompletedStep('checkout');
          setStage('activation');
        }
      } catch (error) {
        emitToast('Error creating payment session:', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    payment();
  };

  const steps = [
    { id: 'checkout', label: 'Checkout', isActive: true, isCompleted: false },
    {
      id: 'activation',
      label: 'Activation',
      isActive: false,
      isCompleted: false,
    },
    {
      id: 'onboarding',
      label: 'Onboarding',
      isActive: false,
      isCompleted: false,
    },
    { id: 'complete', label: 'Complete', isActive: false, isCompleted: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img
              src="/lovable-uploads/5bd49670-0867-4c7c-8190-423e52c722ce.png"
              alt="HoTeach Logo"
              className="h-10 object-contain mx-auto mb-6"
            />
            <ProgressIndicator steps={steps} className="mb-10" />
            <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
            <p className="text-muted-foreground">
              One step closer to your personalized learning journey
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">HotTeach Premium</h2>

            <div className="flex justify-between items-center py-3 border-b border-border">
              <span>Monthly Subscription</span>
              <span>$49.99</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-border">
              <span>First Month Discount</span>
              <span className="text-green-500">-$30.00</span>
            </div>

            <div className="flex justify-between items-center py-3 font-semibold">
              <span>Total Today</span>
              <span>$19.99</span>
            </div>

            <div className="mt-4 p-3 bg-muted rounded-lg text-xs text-muted-foreground">
              <p>
                Your subscription will renew at $49.99/month after the first
                month. You can cancel anytime.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6">
            <FlameButton
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full"
              isLoading={isLoading}>
              Pay $19.99
            </FlameButton>

            <p className="text-xs text-center text-muted-foreground mt-4">
              By completing your purchase, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
