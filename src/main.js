var chars = {
    "mathematicalBold": {
        "a": "𝐚",
        "b": "𝐛",
        "c": "𝐜",
        "d": "𝐝",
        "e": "𝐞",
        "f": "𝐟",
        "g": "𝐠",
        "h": "𝐡",
        "i": "𝐢",
        "j": "𝐣",
        "k": "𝐤",
        "l": "𝐥",
        "m": "𝐦",
        "n": "𝐧",
        "o": "𝐨",
        "p": "𝐩",
        "q": "𝐪",
        "r": "𝐫",
        "s": "𝐬",
        "t": "𝐭",
        "u": "𝐮",
        "v": "𝐯",
        "w": "𝐰",
        "x": "𝐱",
        "y": "𝐲",
        "z": "𝐳",
    }
}
function convertText(text, style){
    text = text.toLowerCase();
    for(let x in chars[style]){
        text = text.replaceAll(x, chars[style][x]);
    }
    return(text);
}
