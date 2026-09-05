//function annotation
function invite(name: string): string {
    return `Invitation sent to for my sons marriage, ${name}`;
}

let message3: string = invite("Chirag");
console.log(message3);