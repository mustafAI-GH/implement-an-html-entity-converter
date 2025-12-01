function convertHTML(str) {

  const map = {

    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"

  };

  return str.replace(/[&<>"']/g, ch => map[ch]);
}

console.log(convertHTML("Dolce & Gabbana"));
