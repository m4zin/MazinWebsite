function cleanString(string) {
  string = string.replace(/&#39;/g, `'`);
  return string;
}

async function particleBackgroundInit() {
  Particles.init({
    selector: ".background",
    color: "#000000",
    connectParticles: true,
    maxParticles: 300,
    responsive: [
      {
        breakpoint: 1000,
        options: {
          color: "#00C9B1",
          maxParticles: 600,
          connectParticles: false,
        },
      },
    ],
  });
}

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
  const xml = loadXMLDocument("/xml/index.xml");
  const xsl = loadXMLDocument("/xml/index.xsl");

  let xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);

  let resultDocument = xsltProcessor.transformToFragment(xml, document);
  console.log(resultDocument)
  document.getElementById("xml-view").appendChild(resultDocument);
}

async function index() {
  let centerTitle = document.getElementById('center-title');
  let typewriter = new Typewriter(centerTitle, {
    loop: true
  });
  typewriter.typeString('Hello, I am Mazin')
  .pauseFor(500)
  .deleteChars(5)
  .typeString('a student at UOWD.')
  .pauseFor(1000)
  .deleteChars(18)
  .typeString('a full stack developer.')
  .deleteChars(23)
  .pauseFor(1000)
  .start();
}

async function CV() {
  parseXML();
}

async function showAlert(msg, error_type) {
  await Swal.fire({
    title: msg,
    icon: (error_type == "error") ? 'error' : 'success',
    confirmButtonText: 'OK',
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true
  })
}

document.addEventListener("DOMContentLoaded", async function(event) {
    const current_page = window.location.pathname;
    if(current_page == "/"){
        index();
        particleBackgroundInit();
    } else if(current_page == "/cv") {
        CV();
        particleBackgroundInit();
    } else if(current_page == "/contact") {
        particleBackgroundInit();
    } else if(current_page == "/hn") {
        console.log($('#hnTable').DataTable().cells())
    }
    else {
      console.log("What page is this fam?")
    }
})
