import fotostudio from "../../studio-paolo.jpg"
function LoStudio(){
    return(<>
    <div id="lo-studio"  style={{
          backgroundImage: `url(${fotostudio})`,
        }} className=" my-6  bg-no-repeat h-96 bg-center"></div>
    </>)
}

export default LoStudio;