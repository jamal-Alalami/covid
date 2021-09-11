import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

function ScreenWrapper(props: any, C: React.FC) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <C {...props} />
    </QueryClientProvider>
  );
}

export default ScreenWrapper;
