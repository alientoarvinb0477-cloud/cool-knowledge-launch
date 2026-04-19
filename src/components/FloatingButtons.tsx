import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom 5 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://www.facebook.com/coolknowledgeenterprises"
      target="_blank"
      rel="noopener noreferrer"
      className="w-15 h-15 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on Facebook"
    >
      <MessageCircle className="w-30 h-30 text-primary-foreground" />
    </a>
    <a
      href="tel:09957928639"
      className="w-15 h-15 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Call Now"
    >
      <Phone className="w-30 h-30 text-primary-foreground" />
    </a>
  </div>
);

export default FloatingButtons;
