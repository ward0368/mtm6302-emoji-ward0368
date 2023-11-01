
const emojiData = [
    { character: "&#x1F600;", code: "1F600" },
    { character: "&#x1F601;", code: "1F601" },
    { character: "&#x1F602;", code: "1F602" },
    { character: "&#x1F603;", code: "1F603" },
    { character: "&#x1F604;", code: "1F604" },
    { character: "&#x1F605;", code: "1F605" },
    { character: "&#x1F606;", code: "1F606" },
    { character: "&#x1F607;", code: "1F607" },
    { character: "&#x1F608;", code: "1F608" },
    { character: "&#x1F609;", code: "1F609" },
    { character: "&#x1F610;", code: "1F610" },
    { character: "&#x1F611;", code: "1F611" },
    { character: "&#x1F612;", code: "1F612" },
    { character: "&#x1F613;", code: "1F613" },
    { character: "&#x1F614;", code: "1F614" },
    { character: "&#x1F615;", code: "1F615" },
    { character: "&#x1F616;", code: "1F616" },
    { character: "&#x1F617;", code: "1F617" },
    { character: "&#x1F618;", code: "1F618" },
    { character: "&#x1F619;", code: "1F619" },
];

const emojiGallery = document.getElementById("emoji-gallery");

emojiData.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.className = "emoji-item";

    const emojiCharacter = document.createElement("p");
    emojiCharacter.innerHTML = <span style="font-size: 5rem;">${emoji.character}</span>;

    const emojiCode = document.createElement("code");
    emojiCode.textContent = emoji.code;

    emojiItem.appendChild(emojiCharacter);
    emojiItem.appendChild(emojiCode);
    emojiGallery.appendChild(emojiItem);
});