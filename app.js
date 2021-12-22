const goBtn = document.querySelector("#go-btn");
const copySymbol = document.querySelector("#copy-symb");
const inputField = document.querySelector("#inp-field");
const outputField = document.querySelector("#outp-field");


// returns string with every word wrapped in quotes and
// inp > word word, word word, | outp >>> "word", "word",
const wrapInQuotes = () => {
    let txtToWrap = inputField.value.trim();
    // replaces line breaks into commas
    let remLineBr = txtToWrap.replace(/(\r\n|\n|\r)/gm,",");
    let arraySplitTxt = remLineBr.split(',');
    // removes empty strings in the array above
    let remEmptyStr = arraySplitTxt.filter(word => word);
    // wrapes every word in quotes ("word", )
    let joinedMappedArrStr = remEmptyStr.map(word => `"${word.trim()}", `).join('');
    
//             let joinedMappedArrStr = mappedArrStr;
    // wraps str in square brackets, rem ,
    let wrappedInBrackets = `[${joinedMappedArrStr.slice(0,-2)}]`;
    
    // Displays result in input (DOM)
    outputField.value = wrappedInBrackets;
}


const flatingTxt = () => {
    let txtToWrap = inputField.value.trim();
    let remLineBr = txtToWrap.replace(/(\r\n|\n|\r)/gm," ");
    
    outputField.value = remLineBr;
}


// Copys output Field txt to Clipboard
const copyToClipboard = () => {
    outputField.select();
    document.execCommand('copy');
    copySymbol.style.background = "green";
    turnSymbolBack();
}


// Pastes from Clipboard
const pasteFromClipboard = () => {
//             inputField.value = '';
    inputField.focus();
    document.execCommand("paste");
}


// Turns copy symbol back to default after 1s
const turnSymbolBack = () => {
    setTimeout(() => {
        copySymbol.style.background = "#525252";
    }, 1000);
}


// Clears input textfield
const clearInputField = () => inputField.value = "";