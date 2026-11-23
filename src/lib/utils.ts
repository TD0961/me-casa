import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number,
  periodOrCurrency?: "month" | "year" | string,
  maybePeriod?: "month" | "year"
) {
  let period: "month" | "year" | undefined;
  let currency = "USD";

  if (periodOrCurrency === "month" || periodOrCurrency === "year") {
    period = periodOrCurrency;
  } else if (typeof periodOrCurrency === "string" && periodOrCurrency.length === 3) {
    currency = periodOrCurrency;
  }

  if (maybePeriod) {
    period = maybePeriod;
  }

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency === "$" ? "USD" : currency,
    maximumFractionDigits: 0,
  }).format(price);

  if (period) {
    return `${formatted}/${period}`;
  }
  return formatted;
}
