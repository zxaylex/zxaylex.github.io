import * as Avatar from '@radix-ui/react-avatar';

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/zxaylex",
    icon: "/github-logo.svg", // Put your SVG/icon path here
    username: "zxaylex"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/zenzxay",
    icon: "/instagram-logo.svg",
    username: "zenzxay"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/zxayler",
    icon: "/linkedin.svg",
    username: "in/zxayler"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/zxayler1",
    icon: "/twitter.svg",
    username: "@zxaylex"
  },
  {
    name: "Email",
    url: "mailto:zachdavid.maregmen@gmail.com",
    icon: "/email.svg",
    username: "zachdavid.maregmen"
  },
  
];

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
          <Avatar.Fallback className="rounded-full w-full h-full flex items-center justify-center bg-gray-100 text-4xl text-gray-500">
            <img src="/profile.jpg" alt="Profile Picture" className='rounded-full'/>
          </Avatar.Fallback>
        </Avatar.Root>
        <h2 className="text-3xl font-bold mb-1 text-center">Zach David Maregmen</h2>
        <p className="text-gray-600 mb-6 text-center">Backend and Blockchain Developer</p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full mt-4">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100"
            >
              <img src={social.icon} alt={social.name} className="w-8 h-8" />
              <div>
                <div className="font-semibold">{social.name}</div>
                <div className="text-gray-500 text-sm">{social.username}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}