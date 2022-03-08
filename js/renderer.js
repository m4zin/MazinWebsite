function loadXMLDocument(aboluteLocation) {
    try {
        xhttp = new XMLHttpRequest();
        xhttp.open("GET", aboluteLocation, false);
        xhttp.send();
        return xhttp.responseXML;   
    } catch (error) {
        console.log(error)
        alert("Could not lot XML file")
    }
}

function parseXML() {
    const xml = loadXMLDocument("./xml/index - Copy.xml");
    const xsl = loadXMLDocument("./xml/index - Copy.xsl");

    let xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
  
    let resultDocument = xsltProcessor.transformToFragment(xml, document);
    console.log(resultDocument)
    document.getElementById("xml-view").appendChild(resultDocument);
}

document.addEventListener("DOMContentLoaded", async function(event) {
    parseXML();
})