import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog Review",
  description: "Redirects directly to the blog index for review.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogReviewPage() {
  redirect("/blog");
}
