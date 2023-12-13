"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";

interface ContactModalInterface {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalInterface> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Contact Me !!!</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          vero!
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
