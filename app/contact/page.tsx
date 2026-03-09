import { ContactsPage } from "@/components/contacts"
import { AnimatedContainer } from "@/components/animated-container"

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 pt-28 pb-16">
      <AnimatedContainer delay={0.05}>
        <h1 className="section-title text-center">Contact</h1>
        <ContactsPage />
      </AnimatedContainer>
    </main>
  )
}
