"use client";

import * as React from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { Gift } from "lucide-react";

export function ExitIntent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasShown, setHasShown] = React.useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const claimGift = () => {
    setIsOpen(false);
    toast("¡Cupón activado! Muestra este mensaje al llegar.", "success");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="¡No te vayas con hambre!"
    >
      <div className="text-center space-y-6">
        <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
          <Gift className="h-10 w-10 animate-bounce" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold italic text-primary">
            Postre de la casa de cortesía
          </h3>
          <p className="text-muted-foreground">
            Reserva tu mesa ahora mismo y te regalamos nuestro famoso Mousse de
            Chocolate al llegar.
          </p>
        </div>
        <div className="pt-4 space-y-3">
          <Button className="w-full" size="lg" onClick={claimGift}>
            ¡Quiero mi postre!
          </Button>
          <Button
            variant="ghost"
            className="w-full text-xs"
            onClick={() => setIsOpen(false)}
          >
            No gracias, prefiero pagar el postre
          </Button>
        </div>
      </div>
    </Modal>
  );
}
