export function Journal(){
  this.title = ""
  this.entry = ""
}

Journal.prototype.vowelCount() = function() {
  var vowelNum = title.match(/[aeiou]/gi)
  return vowelNum.length()
}