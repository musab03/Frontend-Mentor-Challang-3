import TagImage from "./assets/images/illustration-article.svg"


function App() {

  const Pfp = 'https://media.licdn.com/dms/image/v2/D4D03AQF9GHrPwsmh_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702635292780?e=1729728000&v=beta&t=FqBoPKmO9hXHVkzJyozH2iWHTyPVlxw6gLEjKIEmSe8'
  return (
    <div className="mt-28 flex bg-white  flex-col w-full max-w-sm mx-auto items-start justify-start rounded-2xl shadow-3xl"
    >
      <img src={TagImage} alt="center main image" className="rounded-xl m-4" />


      <p className="mx-4 bg-[#F4D04E] px-2 py-1 mb-2 font-extrabold rounded-lg " >Learning</p>

      <p className="mx-4 font-semibold">Publised 21 December 2023</p>

      <h1 className="mx-4 mt-2 text-[#f3d567] text-2xl font-extrabold">HTML & CSS foundations </h1>

      <p className="mx-4 mt-2">These Languages are the backbone of every website, defining structure, content, and presentation</p>

      <div className="m-4 flex flex-row items-center space-x-2">
        <img src={Pfp} alt="" className="w-8 h-8 rounded-full" />
        <p className="font-bold">Musab Khurram</p>
      </div>
    

    </div>
  )
}

export default App