import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';
import { contactLinks } from "@/lib/site-data";

export function ContactsPage() {
  return (
    <section className="py-12 px-4 max-w-xl mx-auto">
      <div className="flex flex-col items-center">
        <Avatar.Root className="w-24 h-24 mb-6">
          <Avatar.Image
            src="/avatar.jpg"
            alt="Your Avatar"
            className="rounded-full w-full h-full object-cover"
          />
          <Avatar.Fallback className="rounded-full w-full h-full flex items-center justify-center bg-muted text-4xl text-muted-foreground">
            <Image src="/profile.jpg" alt="Profile Picture" width={96} height={96} className='rounded-full'/>
          </Avatar.Fallback>
        </Avatar.Root>
        <h2 className="text-3xl font-bold mb-1 text-center">Zach David Maregmen</h2>
        <p className="mb-6 text-center text-muted-foreground">Backend and Blockchain Developer</p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full mt-4">
          {contactLinks.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-border bg-card/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image src={social.icon} alt={social.name} width={32} height={32} className="w-8 h-8" />
              <div>
                <div className="font-semibold">{social.name}</div>
                <div className="text-sm text-muted-foreground">{social.username}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}