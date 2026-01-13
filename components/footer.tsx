export function Footer() {
  return (
    <footer className="border-t bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
