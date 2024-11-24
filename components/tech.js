import Image from "next/image";
import Link from "next/link";

export function Tech() {
    const techs =[
        {source:"/allpics/icon-express.png"},
        {source:"/allpics/icon-git.png"},
        {source:"/allpics/icon-javscript.png"},
        {source:"/allpics/icon-mongodb.png"},
        {source:"/allpics/icon-nextjs.png"},
        {source:"/allpics/icon-nodejs.png"},
        {source:"/allpics/icon-postgresql.png"},
        {source:"/allpics/icon-typescript.png"},
        {source:"/allpics/icon-figma.png"},
    ]

  return (
    <div className="h-screen  py-32 bg-gray-50 flex flex-col justify-between items-center" id="tech" >
      <div className="flex gap-40 justify-center items-center">
        <div>
          <div className="flex gap-2"><Image src="/allpics/pinecone.png" width={86} height={86} className="rounded-lg"/>
          <div className="text-start">
          <p className="text-black font-bold text-2xl">Pinecone academy</p>
          <p className="text-gray-600 font-medium text-lg">Fullstack developer</p>
          <p className="text-gray-600 font-medium text-base">2024.05.06-2024.11.15 суралцсан</p>
          </div>
          </div>
        </div>
        <div className="max-w-[400px] flex flex-wrap text-justify self-end gap-3">
            <p className="text-black font-bold text-2xl">Tech stacks</p>
            <ul className="list-disc text-gray-600 font-medium text-lg pl-4">
              <li>Typescript, Javascript, HTML, CSS</li>
              <li>Node.js, Express.js, Next.js, React, Graphql</li>
              <li>Jest, Cypress</li>
              <li>MongoDB, Postgre, Neon.tech</li>
              <li>Tailwind, ShadcnUI, DaisyUI, Bulma</li>
              <li>Cloudinary, Algoliasearch, Nodemailer, Google map, Ably, Usegeolocation</li>
              <li> Swiper, Parallax effect, Zod+ React hook form, Formik+Yup, useQueryStates-nuqs</li>
              <li>Git, Figma</li>
            </ul>
     
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="flex gap-4">
            {techs.map((tech)=>
            <Image
            src={tech.source}
            alt="Spinning Image 1"
            className="w-12 h-12 object-cover spin-hover hover:cursor-pointer"
            width={12}
            height={12}
          />
            )}
      
    </div>
      </div>
  );
}
