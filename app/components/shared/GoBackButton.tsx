"use client";

import { useRouter } from "next/navigation";

type GoBackButtonProps = {
  fallbackHref: string;
};

export function GoBackButton({ fallbackHref }: GoBackButtonProps) {
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
      className="font-medium opacity-50"
    >
      Go Back
    </button>
  );
}
