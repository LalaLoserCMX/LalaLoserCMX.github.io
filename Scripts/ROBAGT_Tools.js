//'propose' - A useful tool for assigning global variables on the fly.
//Adds a global variable to :root with the value specified. If the variable already exists, it is overwritten.
function propose(variable, mode) {
      document.documentElement.style.setProperty(variable, mode);
}