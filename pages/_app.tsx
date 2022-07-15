import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "bg-red-500 hover:bg-red-700",
        },
        variables: {},
        signIn: {},
        signUp: {},
        userButton: {},
        userProfile: {},
      }}
    >
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default MyApp;
