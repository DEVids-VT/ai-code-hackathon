import {
  QueryClient,
  QueryClientProvider as QueryClientProviderLib,
} from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProviderLib client={queryClient}>
      {children}
    </QueryClientProviderLib>
  );
}

export default QueryClientProvider;
