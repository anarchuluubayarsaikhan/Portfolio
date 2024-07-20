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
      <div className="xl: max-w-screen-xl  xl:m-auto py-16 px-4 xl:py-24 xl:px-20 dark:bg-gray-950 flex flex-col gap-6 xl:gap-12">
            <div className="flex flex-col gap-4">
                <button className="bg-gray-200 w-20 h-7 rounded-xl text-gray-600 text-sm font-medium m-auto py-1 px-5 dark:bg-dark-200 dark:text-dark-600">Skills</button>
                <div className="text-gray-600 font-normal text-lg text-center dark:text-dark-600">The skills, tools and technologies I am 
                     <br/>really good at:
                </div>
            </div>
            <div className="grid grid-cols-3 gap-y-4  xl:grid-cols-8 xl:grid-rows-2 xl:gap-x-[22] xl:gap-y-12">
                {skills.map((skill) => (
                   <div className="flex flex-col place-items-center gap-2 dark:text-dark-600">
                        <img src={skill.picture}/>
                        <div>{skill.name}</div>
                   </div>))}

            </div>
           
      </div>
    )
}