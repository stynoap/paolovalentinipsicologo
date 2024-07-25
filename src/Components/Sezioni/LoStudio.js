import fotostudio from "../../studio-paolo.jpg"
function LoStudio(){
    return(<>
    <div  style={{
          backgroundImage: `url(${fotostudio})`,
        }} className=" my-6 h-96 bg-zinc-900 w-full"></div>
    </>)
}

export default LoStudio;