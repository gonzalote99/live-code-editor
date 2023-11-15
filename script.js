function run() {
  let htmlcode = document.getElementById('html-code').value;
  let csscode = document.getElementById('css-code').value;
  
  let output = document.getElementById('output');

  output.contentDocument.body.innerHTML = htmlcode + "<style>"+ csscode+ "<style>";
  
}