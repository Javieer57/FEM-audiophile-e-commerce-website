"use client";

import { useRouter } from "next/navigation";

type GoBackButtonProps = {
  fallbackHref?: string;
};

export function GoBackButton({ fallbackHref = "/" }: GoBackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hover:text-primary focus-visible:text-primary font-medium opacity-50 transition-all duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
    >
      Go Back
    </button>
  );
}
