import fotostudio from "../../studio-paolo.jpg"
function LoStudio(){
    return(<>
    <div  style={{
          backgroundImage: `url(${fotostudio})`,
        }} className=" my-6  bg-no-repeat h-96 w-5/5 bg-center"></div>
    </>)
}

export default LoStudio;