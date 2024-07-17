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
       <div className="text-center flex flex-col gap-6 mt-16">
            <div className="flex flex-col gap-4 place-items-center">
                <span className="bg-gray-200 rounded-xl py-1 px-5 w-fit ">Work</span>
                <div className="text-gray-600 font-normal text-xl">Some of the noteworthy projects I have built:</div>
            </div>
             <div>
            {works.map((work, index) => 
              (<div key={index} className=" xl:flex xl:flex-row xl:gap-6">
                    <div className="bg-gray-50 rounded-t-xl p-8 max-w-full m-auto xl:max-w-[576px]">
                        <img src={work.image} className="m-auto"/>
                    </div>
                    <div className="flex flex-col gap-6 p-8 xl:max-w-[576px] items-start xl:p-12">
                        <div className="text-gray-900 text-xl font-semibold">{work.skillname}</div>
                        <div className="text-gray-600 text-base font-normal">{work.text}</div>
                        <div className="flex flex-wrap gap-2">
                            {work.buttons.map((button, index) => (
                            <span className="bg-gray-200 rounded-xl  text-gray-600 font-medium text-sm text-center px-5 py-1" key={index}>{button}</span>
                        ))}
                        </div>
                    </div>
                </div>
              ))}
        </div>
       </div>
    );
}
