import chalk from chalk;
import randomColor from randomColor;


const color = randomColor();
function colorAndLog() {
  console.log(chalk.hex(color));
}


