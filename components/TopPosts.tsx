import React from "react";
import BlogList from "@/components/BlogList";
import type { BlogPost } from "@/lib/blog";

export default function TopPosts({
  pillar,
  title = "Top posts from this pillar",
  limit = 6,
}: {
  pillar: BlogPost["pillar"];
  title?: string;
  limit?: number;
}) {
  return (
    <div className="mt-12">
      <BlogList title={title} pillar={pillar} limit={limit} />
    </div>
  );
}
