
const Home = () => {


  return (
    <div className="pt-[5em] text-white p-2 ">

      <div className="flex flex-col xl:flex-row relative pb-4 gap-2">
        <div className="flex flex-col mb-6 w-full xl:w-[50%] gap-5 pt-[8em] pr-[55px]">
          <h1 className="text-7xl font-thin">Kutob at Lihim</h1>
          <p className="text-2xl text-justify text-[#afd0f0] font-serif italic">Sa malayong isla sa katimugang bahagi ng Visayas, nakatago ang isang lihim na lugar na tinatawag na Sitio Kubli. 
          Dito magsisimula ang kuwento ni Hulyan, isang lalaking 25 taong gulang, na tumakas mula sa maingay at magulong buhay 
          ng siyudad.
          </p>
        </div>

        <div className="bg-black h-[440px] w-full xl:w-[50%] ">
        <p>video player</p>
      </div>
      </div>
      
      <div className="flex gap-2 flex-wrap flex-1  justify-between mt-20">
        <div className="bg-gray-900 h-[400px] w-[360px]">
          <p>Character Card</p>
        </div>
        <div className="bg-gray-900 h-[400px] w-[360px]">
          <p>Character Card</p>
        </div>
        <div className="bg-gray-900 h-[400px] w-[360px]">
          <p>Character Card</p>
        </div>
        <div className="bg-gray-900 h-[400px] w-[360px]">
          <p>Character Card</p>
        </div>

      </div>
      
    </div>
  )
}

export default Home