const works = [
    {image : "/allpics/Cardpic.jpg",
     skillname: "Fiskill",
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
     buttons: [ "React", "Next.js","Typescript", "Nest.js","PostreSQL","Tailwindcss", "Figma","Cypress","Storybook","Git"]
    },
    {image : "/allpics/Cardpic.jpg",
    skillname: "Fiskill",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    buttons: [ "React", "Next.js","Typescript", "Nest.js","PostreSQL","Tailwindcss", "Figma","Cypress","Storybook","Git"]
    },
    {image : "/allpics/Cardpic.jpg",
    skillname: "Fiskill",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    buttons: [ "React", "Next.js","Typescript", "Nest.js","PostreSQL","Tailwindcss", "Figma","Cypress","Storybook","Git"]
    },
]


export function Works () {
    return (
       <div className=" flex flex-col gap-6  xl: max-w-screen-xl xl:m-auto py-16 px-4 xl:py-24 xl:px-20 dark:bg-gray-950">
            <div className="flex flex-col gap-4 place-items-center">
                <span className="bg-gray-200 rounded-xl py-1 px-5 w-fit dark:bg-dark-200 dark:text-dark-600">Work</span>
                <div className="text-gray-600 font-normal text-xl">Some of the noteworthy projects I have built:</div>
            </div>
             <div className="flex flex-col gap-6 xl:gap-12">
            {works.map((work, index) => 
              (<div key={index} className="xl:flex xl:flex-row xl:gap-6 rounded-xl shadow-md">
                    <div className={`bg-gray-50 rounded-t-xl px-8 py-8 xl:flex-1 max-w-full m-auto xl:max-w-[576px] ${index%2==0? "order-2" : "order-1"}`}>
                        <img src={work.image} height={384} width={480} className="m-auto w-full"/>
                    </div>
                    <div className={`flex flex-col gap-6 p-8 xl:max-w-[576px] xl:flex-1 items-start xl:p-12 ${index%2!==0? "order-2" : "order-1"}`}>
                        <div className="text-gray-900 text-xl font-semibold dark:text-dark-900">{work.skillname}</div>
                        <div className="text-gray-600 text-base font-normal dark:text-dark-600">{work.text}</div>
                        <div className="flex flex-wrap gap-2">
                            {work.buttons.map((button, index) => (
                            <span className="bg-gray-200 rounded-xl  text-gray-600 font-medium text-sm text-center px-5 py-1 dark:bg-dark-200 dark:text-dark-600" key={index}>{button}</span>
                        ))}
                        </div>
                    </div>
                </div>
              ))}
        </div>
       </div>
    );
}
