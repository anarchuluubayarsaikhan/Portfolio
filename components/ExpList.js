import Card from "./Cards"

const experiences =[
    {
        title:"Sr. Frontend Developer",
        listItems:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Ut pretium arcu et massa semper, id fringilla leo semper.","Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate:"Nov 2021",
        endDate:"Present",
    },
    {
        title:"Team Lead",
        listItems:["Sed quis justo ac magna.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate:"Jul 2017",
        endDate:"Oct 2021",
    },
    {
        title:"Full Stack Developer",
        listItems:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate:"Dec 2015 ",
        endDate:"May 2017",
    },
]
export default function ExpList() {
    return (
        <div className="flex flex-col gap-12">
            {experiences.map((experience, index) =>(
                <div key={index}>
                    <Card props={experience}/>
                </div>
            ))}
        </div>
    )
}