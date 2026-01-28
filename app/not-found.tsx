import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-silver-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-charcoal-200 mb-4">404</h1>
        <p className="text-xl text-silver-400 mb-8">
          Page not found. The page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <Button variant="default" size="lg">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
