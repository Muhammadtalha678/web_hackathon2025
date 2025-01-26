import { Toaster } from '@/components/ui/toaster';
import '../globals.css'
export default function AdminLayout(
    {
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
          >
              <Toaster/>
        {children}
        
      </body>
    </html>
  );
}