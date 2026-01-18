"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  type?: "modal" | "drawer";
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  type = "modal",
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const isDrawer = type === "drawer";

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = isDrawer
    ? {
        hidden: { x: "100%" },
        visible: { x: 0 },
        exit: { x: "100%" },
      }
    : {
        hidden: { opacity: 0, scale: 0.95, y: 10 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 10 },
      };

  const ModalComponent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "relative z-50 w-full overflow-hidden bg-card text-card-foreground shadow-2xl outline-none",
              isDrawer
                ? "fixed right-0 top-0 h-full max-w-md rounded-l-2xl"
                : "max-w-lg rounded-2xl",
              className,
            )}
          >
            <div className="flex items-center justify-between border-b p-4 sm:p-6">
              {title && (
                <h2 className="font-serif text-xl font-bold">{title}</h2>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="ml-auto rounded-full"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Cerrar</span>
              </Button>
            </div>
            <div className="h-full overflow-y-auto p-4 sm:p-6 pb-24">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(ModalComponent, document.body);
}
