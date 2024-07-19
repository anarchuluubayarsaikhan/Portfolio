const skills = [
    {picture: "/allpics/icon-javscript.png",
     name: "Javascript"},
    {picture: "/allpics/icon-typescript.png",
        name: "Typescript"},
    {picture: "/allpics/React.png",
        name: "React"},
    {picture: "/allpics/icon-nextjs.png",
        name: "Next.js"},
    {picture: "/allpics/icon-nodejs.png",
        name: "Node.js"},
    {picture: "/allpics/icon-express.png",
        name: "Express.js"},
    {picture: "/allpics/icon-nest.png",
        name: "Nest.js"},
    {picture: "/allpics/icon-postgresql.png",
        name: "PostgreSQL"},
    {picture: "/allpics/icon-mongodb.png",
        name: "MongoDB"},
    {picture: "/allpics/icon-sass.png",
        name: "Sass/Scss"},
    {picture: "/allpics/Tailwind.png",
        name: "Tailwindcss"},
    {picture: "/allpics/icon-figma.png",
        name: "Figma"},
    {picture: "/allpics/icon-cypress.png",
        name: "Cypress"},
    {picture: "/allpics/icon-storybook.png",
        name: "Storybook"},
]


export function Skills() {
    return (
      <div className="xl: max-w-screen-xl  xl:m-auto py-24 px-20 xl:mt-24 xl:mb-24">
            <div className="flex flex-col gap-4  my-24 ">
                <button className="bg-gray-200 w-20 h-7 rounded-xl text-gray-600 text-sm font-medium m-auto py-1 px-5">Skills</button>
                <div className="text-gray-600 font-normal text-lg text-center">The skills, tools and technologies I am 
                     <br/>really good at:
                </div>
            </div>
            <div className="grid grid-cols-3 gap-y-4  xl:grid-cols-8 xl:grid-rows-2 xl:gap-x-[22] xl:gap-y-12">
                {skills.map((skill) => (
                   <div className="flex flex-col place-items-center gap-2">
                        <img src={skill.picture}/>
                        <div>{skill.name}</div>
                   </div>))}

            </div>
           
      </div>
    )
}