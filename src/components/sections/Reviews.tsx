import Image from "next/image";
import { reviews, reviewStats } from "@/content/reviews";
import { Card, CardContent } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Reviews() {
  return (
    <section id="resenas" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Summary */}
          <div className="lg:w-1/3 space-y-8 sticky top-32">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Lo que dicen de nosotros
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-6xl font-serif font-bold text-primary">
                  {reviewStats.average}
                </span>
                <div>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    {reviewStats.total} reseñas totales
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                {reviewStats.scores.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-sm mb-1.5 font-medium">
                      <span>{s.label}</span>
                      <span>{s.score}</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(s.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Ver más en Google
            </Button>
          </div>

          {/* Testimonials List */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <Card key={r.id} className={i % 2 !== 0 ? "sm:mt-8" : ""}>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center gap-4 text-accent">
                    <Quote className="h-8 w-8 opacity-20 rotate-180" />
                    <div className="flex">
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="italic text-muted-foreground leading-relaxed">
                    &ldquo;{r.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 border-t pt-6">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={`https://i.pravatar.cc/150?u=${r.id}`}
                        alt={r.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
