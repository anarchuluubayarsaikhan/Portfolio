import Link from "next/link";

export function AboutmeText() {
    return (
      <div className="flex flex-col gap-4 xl:flex-1">
        <div className="text-gray-900 text-3xl font-semibold">
            Curious about me? Here you have it:
        </div>
        <div className="text-gray-600 font-normal text-base">
            I'm a passionate, <Link href="https://www.figma.com/@shahsagarm" className="underline">self-proclaimed designer</Link> who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            <br/>
            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            <br/>
            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            <br/>
            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fshahsagarm" className="underline">Twitter</Link> where I share tech-related bites and build in public, or you can follow me on <Link href="https://github.com/shahsagarm" className="underline">GitHub</Link>.
            <br/>
            Finally, some quick bits about me.
        </div>
        <ul className="text-gray-600 font-normal text-base list-disc grid grid-cols-2 ml-4"> 
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
            <li>Avid learner</li>
            <li>Aspiring indie hacker</li>
        </ul>
        <div className="text-gray-600 font-normal text-base">
            One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite
        </div>
      </div>
    )
}