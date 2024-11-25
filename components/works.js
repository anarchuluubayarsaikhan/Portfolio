import Image from "next/image";
import Link from "next/link";

export function Works() {
  const projects = [
    {
      image: "/allpics/amidos.png",
      link: "https://amidos.vercel.app/",
      name:"AMIDO's",
      description:
        "Typescript, Next.js, MongoDB, ShadcnUI, Algoliasearch, Cloudinary, Usegeolocation, Nodemailer, Google map",
      text: "ХООЛ ХҮРГЭЛТ",
    },
    {
      image: "/allpics/expense.png",
      link: "https://expense-frontend-theta.vercel.app/",
      name:"EXPENSE TRACKER",
      description:
      "Javascript, Next.js, Node.js, Postgre, Neon.tech ",
      text: "ОРЛОГО ЗАРЛАГА ХӨТЛӨХ ВЕБ АПП",
    },
    {
      image: "/allpics/pinetour.png",
      link: "https://pinetour-qs47.vercel.app/",
      name:"PINETOUR",
      description: "HTML, CSS",
      text: "LANDING PAGE",
    },
    {
      image: "/allpics/todo.png",
      link: "https://tod-osimpleapp.vercel.app/",
      name:"TODO WEB APP",
      description: "Javascript, Bulma",
      text: "ХИЙХ ЗҮЙЛСИЙН ЖАГСААЛТ ГАРГАХ",
    },
    {
      image: "/allpics/blog.png",
      link: "https://blog-fv3qx0ue1-anarchuluu-bayarsaikhans-projects.vercel.app/",
      description: "Javascript,Next.js, Tailwind, Dev.to",
      name:"BLOG",
      text: "БЛОГ",
    },
    {
      image: "/allpics/gogo.png",
      link: "https://gogo-delta-six.vercel.app/",
      description: "HTML, CSS",
      name:"GOGO",
      text: "GOGO MЭДЭЭНИЙ САЙТ",
    },
  ];
  return (
    <div className="text-center py-20 bg-black" id="projects">
      <Link
        href="https://github.com/anarchuluubayarsaikhan"
        className="text-white font-bold text-3xl"
      >
       MИНИЙ ХИЙСЭН ТӨСЛҮҮД
      </Link>
      <div className=" w-full flex justify-center">
        <div className="grid grid-cols-1  lg:grid-cols-2 py-12 gap-x-4 lg:gap-y-8 gap-y-24 px-6 lg:px-0">
          {projects.map((project) => (
            <div key={project.name}>
                 <Link href={project.link} target="blank">
              <div className="relative group w-full h-full lg:max-w-[400px] lg:h-[200px] rounded-lg hover:overflow-hidden  border border-gray-300 shadow-xl  ">
              
                  <Image
                    src={project.image}
                    width={300}
                    height={200}
                    className="hover:scale-125 w-full h-full aspect-video object-cover"
                  />
               
                <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out">
                    <p className="text-white text-base font-semibold text-center">
                     {project.name}
                    </p>
                    <p className="text-[#767776] text-xs font-semibold text-center">
                     {project.text}
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <div className="lg:max-w-[400px] flex flex-wrap text-[#767776]  font-medium text-lg lg:text-sm mt-2 text-justify">
                {project.description}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
