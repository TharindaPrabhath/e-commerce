import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-center h-16 items-center gap-4 border-t bg-background px-4 md:px-6">
      <p className="flex flex-row items-center text-muted-foreground">
        <span>
          <Copyright className="w-4 h-4 mr-2" />
        </span>{" "}
        All rights reserved
      </p>
    </footer>
  );
}
