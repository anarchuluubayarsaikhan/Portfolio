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
        <div>
            {works.map((work, index) => 
              (<div key={index}>
                    <img src={work.image}/>
                    <div className="text-gray-900 text-xl font-semibold">{work.skillname}</div>
                    <div className="text-gray-600 text-base font-normal">{work.text}</div>
                    <div>
                        {work.buttons.map((button, index) => (
                        <span className="bg-gray-200 rounded-xl  text-gray-600 font-medium text-sm text-center px-5 py-1" key={index}>{button}</span>
                    ))}
                    </div>
                </div>
              ))}
        </div>
    );
}
