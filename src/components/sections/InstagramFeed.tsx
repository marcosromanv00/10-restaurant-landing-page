"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

const INSTA_POSTS = [
  { id: 1, likes: "1.2k", comments: 45, img: "/images/insta1.png" },
  { id: 2, likes: "892", comments: 23, img: "/images/insta2.png" },
  { id: 3, likes: "2.1k", comments: 67, img: "/images/insta3.png" },
  { id: 4, likes: "754", comments: 12, img: "/images/insta4.png" },
  { id: 5, likes: "1.5k", comments: 89, img: "/images/insta5.png" },
  { id: 6, likes: "1.1k", comments: 54, img: "/images/insta6.png" },
];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-card/10 border-y border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-3xl font-bold serif-text">
              Sabor en cada píxel
            </h3>
            <p className="text-muted-foreground font-medium">
              Síguenos en{" "}
              <span className="text-primary font-bold">@brasayoliva</span>
            </p>
          </div>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-card rounded-xl border border-black/5 font-bold shadow-sm hover:shadow-xl transition-all duration-300 pointer-events-auto"
          >
            <Instagram className="h-5 w-5 text-primary" />
            <span>Seguir en Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTA_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="relative aspect-square rounded-xl overflow-hidden group shadow-md"
            >
              <Image
                src={post.img}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-tighter">
                  <Heart className="h-4 w-4 fill-primary text-primary" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-tighter">
                  <MessageCircle className="h-4 w-4 fill-white" />
                  {post.comments}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
