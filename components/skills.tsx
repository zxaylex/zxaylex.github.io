const programmingLanguages = [
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.png' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Rust', logo: '/logos/rust.png' },
  { name: 'Motoko', logo: '/logos/motoko.png' },
  { name: 'C++', logo: '/logos/c++.png' },
];

const operatingSystems = [
    { name: 'Windows 10', logo: "/logos/windows.png" },
    { name: 'Linux Mint', logo: "/logos/linuxmint.png" },
    { name: 'Kali Linux', logo: "/logos/kali.png" },
]

const designPlatforms = [
    { name: "Figma", logo: "/logos/figma.png" },
    { name: "Lunacy", logo: "/logos/lunacy.png" },
    { name: "GIMP", logo: "/logos/gimp.png" },
]

const codeEditors = [
    { name: "Visual Studio Code", logo: "/logos/vscode.png" },
    { name: "Sublime Text", logo: "/logos/sublimetext.png" },
]

export function SkillsSection() {
  return (
    <div className="py-8 px-4">
        <div>
            <h1 className="text-center">Programming Languages</h1>
            <div className="items-center grid gap-6 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center">
            {programmingLanguages.map((skill) => (
                <div
                    key={skill.name}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center min-w-0 w-full"
                >
                    <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-3"
                    />
                    <span className="font-medium text-base text-center">{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
        <div className="mt-6">
            <h1 className="text-center">Operating Systems</h1>
            <div className="grid gap-6 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center">
            {operatingSystems.map((skill) => (
                <div
                    key={skill.name}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center min-w-0 w-full"
                >
                    <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-3"
                    />
                    <span className="font-medium text-base text-center">{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
        <div className="mt-6">
            <h1 className="text-center">Design Platforms</h1>
            <div className="grid gap-6 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center">
            {designPlatforms.map((skill) => (
                <div
                    key={skill.name}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center min-w-0 w-full"
                >
                    <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-3"
                    />
                    <span className="font-medium text-base text-center">{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
        <div className="mt-6">
            <h1 className="text-center">Code Editors</h1>
            <div className="grid gap-6 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center">
            {codeEditors.map((skill) => (
                <div
                    key={skill.name}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center min-w-0 w-full"
                >
                    <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-3"
                    />
                    <span className="font-medium text-base text-center">{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
    </div>
    
  );
}