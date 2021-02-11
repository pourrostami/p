

const LoadTextFile = ({newPaln,ast}) => {
    return ( 
              
    <div>
    <input onChange={ast} type="file" id="inputId"/>
    <textarea cols="30" rows="20" id="textareaId" ></textarea>
    
</div>
     );
}
 
export default LoadTextFile;