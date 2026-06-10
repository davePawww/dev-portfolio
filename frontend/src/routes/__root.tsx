import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import type { RouterContext } from '@/types/common.types';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Container from '@/components/container';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Container>
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </Container>
      {/*<ReactQueryDevtools initialIsOpen={false} />
      <TanStackRouterDevtools initialIsOpen={false} />*/}
    </>
  );
}
