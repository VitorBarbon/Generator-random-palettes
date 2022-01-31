function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(255, 100, 200));
//código RGB(255, 100, 200);

// var hex = "#ff64c8";
// var red = parseInt(hex[1]+hex[2],16);
// var green = parseInt(hex[3]+hex[4],16);
// var blue = parseInt(hex[5]+hex[6],16);
// console.log(red,green,blue);