// ─── Contact form → email (free) ─────────────────────────────────────────────
// Form submissions are handled by Formspree's free plan (up to 50/mo, no monthly
// cost). Each submission is emailed to the inbox you set up on Formspree.
//
// The form ID below is public by design (Formspree accepts client-side POSTs),
// so it is safe to keep in the repo. You created the form at:
//   https://formspree.io/f/xbgjwozr
//
// To change where submissions go, edit the form inside your Formspree dashboard
// (you don't need to change code). Optionally, an environment variable
// (NEXT_PUBLIC_FORMSPREE_FORM_ID) can override this for different environments.
export const FORMSPREE_FORM_ID: string =
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xbgjwozr";

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

export const isFormspreeConfigured = (): boolean => Boolean(FORMSPREE_FORM_ID);

export const CONTACT_EMAIL = "chris@thekasgroup.com";