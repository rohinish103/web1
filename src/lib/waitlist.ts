export type WaitlistResult = { status: "unavailable" } | { status: "joined" };

/**
 * Prototype placeholder: nothing is sent or stored. Replace with a real
 * waitlist endpoint once one exists.
 */
export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  void email;
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { status: "unavailable" };
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
