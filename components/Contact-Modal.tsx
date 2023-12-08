import React from "react";
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
