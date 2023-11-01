const emojiData = [
    { character: "&#128529;", code: "1F611" },
    { character: "&#128525;", code: "1F60D" },
    { character: "&#128545;", code: "1F621" },
    { character: "&#128548;", code: "1F624" },
    { character: "&#128552;", code: "1F628" },
    { character: "&#128561;", code: "1F631" },
    { character: "&#128562;", code: "1F632" },
    { character: "&#128564;", code: "1F634" },
    { character: "&#128565;", code: "1F635" },
    { character: "&#128567;", code: "1F637" },
    { character: "&#128566;", code: "1F636" },
    { character: "&#128556;", code: "1F62C" },
    { character: "&#128539;", code: "1F61B" },
    { character: "&#128536;", code: "1F618" },
    { character: "&#128527;", code: "1F60F" },
    { character: "&#128522;", code: "1F60A" },
    { character: "&#128520;", code: "1F608" },
    { character: "&#128512;", code: "1F600" },
    { character: "&#128516;", code: "1F604" },
    { character: "&#128518;", code: "1F606" },
];

const emojiGallery = document.getElementById("emoji-gallery");

emojiData.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.className = "emoji-item";

    const emojiCharacter = document.createElement("p");
    emojiCharacter.innerHTML = `<span style="font-size: 5rem;">${emoji.character}</span>`;

    const emojiCode = document.createElement("code");
    emojiCode.textContent = emoji.code;

    emojiItem.appendChild(emojiCharacter);
    emojiItem.appendChild(emojiCode);
    emojiGallery.appendChild(emojiItem);
});

