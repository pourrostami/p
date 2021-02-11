

export const ast = () =>{
    let input = document.getElementById('inputId');
let textarea = document.getElementById('textareaId');

// input.addEventListener('change',()=>{
//     alert('allah');
// alert('sobhanallah allah');
//     let files = input.files;

//     if(files.length == 0) return;

//     const file = files[0];

//     let reader = new FileReader();

//     reader.onload = (e) => {
//         const file = e.target.result;
//         const lines = file.split(/\r\n|\n/);
//         textarea.value = lines.join('\n');
//     };

//     reader.onerror = (e) => alert(e.target.error.name);

//     reader.readAsText(file);
// });

//     alert('allah');
// alert('sobhanallah allah');
    let files = input.files;

    let arr = new Array;
    if(files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
        arr = (lines.join('\n')).split(',');
        //
    };
console.log(arr);
    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
  return arr;
}