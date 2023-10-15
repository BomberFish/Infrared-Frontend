// school toilet paper-thin wrapper around localStorage.
function save(key, value) {
    console.log("setting key " + key + " to value " + value)
    localStorage.setItem(key, value);
}

function load(key) {
    console.log("loading " + key)
    let value = localStorage.getItem(key);
    return value
}

function registerDefault(key, value) {
    let currentValue = load(key);
    if (currentValue === null) {
        console.log("registering default " + key + " " + value)
        save(key, value);
    } else {
        console.log("not registering default " + key + ", already set to " + load(key))
    }
}

function switchTheme(theme) {
    console.log("changing theme to " + theme)
    document.body.classList.forEach((className) => {
        document.body.classList.remove(className);
    });

    document.body.classList.add(theme);
}

document.getElementById("ir-theme").value = load("theme")
switchTheme(load("theme"))

function switchIcons(style) {
    console.log("changing tab icons to " + style)
    if (style === "sanfrancisco") {
        document.querySelector("#homeBtn > .svgWrapper > svg").style.scale = "1.2";
        document.querySelector("#settingsBtn > .svgWrapper > svg").style.scale = "1.2";
        document.querySelector("#qlBtn > .svgWrapper > svg").style.scale = "1.2";
        document.querySelector("#homeBtn > .svgWrapper").innerHTML = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='18.6484' height='17.7305'><g><rect height='17.7305' opacity='0' width='18.6484' x='0' y='0'/><path d='M7.07031 15.6035L11.5781 15.6035L11.5781 9.91602C11.5781 9.55664 11.3438 9.32227 10.9844 9.32227L7.67188 9.32227C7.30469 9.32227 7.07031 9.55664 7.07031 9.91602ZM4.01562 16.4082L14.5859 16.4082C15.6953 16.4082 16.3438 15.7754 16.3438 14.6816L16.3438 6.04883L15.0859 5.18945L15.0859 14.3613C15.0859 14.8691 14.8125 15.1504 14.3203 15.1504L4.28125 15.1504C3.78125 15.1504 3.50781 14.8691 3.50781 14.3613L3.50781 5.19727L2.25 6.04883L2.25 14.6816C2.25 15.7754 2.89844 16.4082 4.01562 16.4082ZM0 7.71289C0 8.0332 0.25 8.33789 0.671875 8.33789C0.890625 8.33789 1.07031 8.2207 1.23438 8.08789L9.05469 1.52539C9.22656 1.36914 9.4375 1.36914 9.60938 1.52539L17.4297 8.08789C17.5859 8.2207 17.7656 8.33789 17.9844 8.33789C18.3516 8.33789 18.6484 8.11133 18.6484 7.73633C18.6484 7.50195 18.5703 7.3457 18.4062 7.20508L10.2734 0.369141C9.69531-0.123047 8.97656-0.123047 8.39062 0.369141L0.25 7.20508C0.078125 7.3457 0 7.5332 0 7.71289ZM14.3828 4.18945L16.3438 5.8457L16.3438 2.23633C16.3438 1.89258 16.125 1.67383 15.7812 1.67383L14.9453 1.67383C14.6094 1.67383 14.3828 1.89258 14.3828 2.23633Z'/></g></svg>";
        document.querySelector("#settingsBtn > .svgWrapper").innerHTML = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17.5938' height='17.3435'><g><rect height='17.3435' opacity='0' width='17.5938' x='0' y='0'/><path d='M8.79688 16.2772C9 16.2772 9.19531 16.2616 9.40625 16.246L9.85156 17.0975C9.94531 17.2772 10.1094 17.3632 10.3281 17.3397C10.5234 17.3007 10.6562 17.1522 10.6875 16.9491L10.8203 16.0038C11.2109 15.8944 11.5938 15.746 11.9609 15.5897L12.6641 16.2225C12.8125 16.3632 13 16.3866 13.1953 16.285C13.3672 16.1835 13.4375 16.0038 13.3984 15.7929L13.2031 14.8632C13.5312 14.6366 13.8516 14.3788 14.1406 14.0897L15.0078 14.4491C15.2031 14.535 15.3906 14.4882 15.5391 14.3163C15.6719 14.1679 15.6797 13.9725 15.5703 13.7929L15.0625 12.9804C15.2969 12.66 15.4844 12.3007 15.6641 11.9257L16.625 11.9725C16.8281 11.9882 16.9922 11.871 17.0625 11.6835C17.125 11.4882 17.0703 11.3007 16.9062 11.1757L16.1562 10.5819C16.2578 10.1991 16.3359 9.80067 16.375 9.3788L17.2734 9.08973C17.4766 9.02723 17.5938 8.8788 17.5938 8.66786C17.5938 8.45692 17.4766 8.30848 17.2734 8.23817L16.375 7.95692C16.3359 7.53505 16.2578 7.14442 16.1562 6.7538L16.9062 6.16005C17.0625 6.03505 17.125 5.85536 17.0625 5.66005C16.9922 5.47255 16.8281 5.35536 16.625 5.37098L15.6641 5.40223C15.4844 5.02723 15.2969 4.68348 15.0625 4.34755L15.5703 3.53505C15.6797 3.37098 15.6641 3.17567 15.5391 3.02723C15.3906 2.85536 15.2031 2.8163 15.0078 2.89442L14.1406 3.24598C13.8516 2.96473 13.5312 2.69911 13.2031 2.47255L13.3984 1.55067C13.4453 1.33192 13.3672 1.15223 13.1953 1.05848C13 0.949109 12.8125 0.972546 12.6641 1.12098L11.9609 1.74598C11.5938 1.58192 11.2109 1.44911 10.8203 1.33192L10.6875 0.394421C10.6562 0.191296 10.5156 0.0428586 10.3203 0.00379608C10.1094-0.0196414 9.9375 0.0662961 9.85156 0.238171L9.40625 1.08973C9.19531 1.07411 9 1.0663 8.79688 1.0663C8.58594 1.0663 8.39844 1.07411 8.1875 1.08973L7.73438 0.238171C7.64844 0.0662961 7.47656-0.0196414 7.26562 0.00379608C7.07031 0.0428586 6.92969 0.191296 6.90625 0.394421L6.76562 1.33192C6.375 1.44911 6 1.57411 5.625 1.74598L4.92188 1.12098C4.77344 0.972546 4.58594 0.956921 4.39062 1.05848C4.21875 1.15223 4.14062 1.33192 4.1875 1.55067L4.38281 2.47255C4.0625 2.69911 3.73438 2.96473 3.44531 3.24598L2.57812 2.89442C2.38281 2.8163 2.20312 2.85536 2.05469 3.02723C1.92188 3.17567 1.90625 3.37098 2.01562 3.53505L2.52344 4.34755C2.29688 4.68348 2.10156 5.02723 1.92188 5.40223L0.96875 5.37098C0.765625 5.35536 0.59375 5.47255 0.523438 5.66005C0.460938 5.85536 0.523438 6.03505 0.679688 6.16005L1.42969 6.7538C1.32812 7.14442 1.25 7.53505 1.22656 7.94911L0.3125 8.23817C0.109375 8.30848 0 8.45692 0 8.66786C0 8.8788 0.109375 9.02723 0.3125 9.08973L1.22656 9.3788C1.25 9.80067 1.32812 10.1991 1.42969 10.5819L0.679688 11.1757C0.523438 11.2929 0.46875 11.4804 0.523438 11.6835C0.59375 11.871 0.765625 11.9882 0.96875 11.9725L1.92188 11.9257C2.10156 12.3007 2.29688 12.66 2.52344 12.9804L2.01562 13.7929C1.90625 13.9725 1.92188 14.1679 2.05469 14.3163C2.20312 14.4882 2.38281 14.535 2.57812 14.4491L3.44531 14.0897C3.73438 14.3788 4.0625 14.6366 4.38281 14.8632L4.1875 15.7929C4.14844 16.0038 4.21875 16.1835 4.39062 16.285C4.58594 16.3866 4.77344 16.3632 4.92188 16.2225L5.625 15.5897C6 15.746 6.375 15.8944 6.76562 16.0038L6.90625 16.9491C6.92969 17.1522 7.07031 17.3007 7.26562 17.3397C7.47656 17.3632 7.64062 17.2772 7.73438 17.0975L8.1875 16.246C8.39062 16.2616 8.58594 16.2772 8.79688 16.2772ZM8.79688 15.0975C5.21875 15.0975 2.45312 12.2382 2.45312 8.67567C2.45312 5.10536 5.21875 2.24598 8.79688 2.24598C12.375 2.24598 15.1406 5.10536 15.1406 8.67567C15.1406 12.2382 12.375 15.0975 8.79688 15.0975ZM7.42969 7.38661L8.29688 6.83973L5.64844 2.30848L4.75 2.8163ZM10.6094 9.16786L15.8828 9.16786L15.875 8.16005L10.6094 8.16005ZM8.30469 10.5194L7.44531 9.95692L4.67188 14.496L5.5625 15.0194ZM8.78125 10.7304C9.90625 10.7304 10.8203 9.8163 10.8203 8.68348C10.8203 7.55067 9.90625 6.63661 8.78125 6.63661C7.64844 6.63661 6.73438 7.55067 6.73438 8.68348C6.73438 9.8163 7.64844 10.7304 8.78125 10.7304ZM8.78125 9.6288C8.24219 9.6288 7.83594 9.21473 7.83594 8.68348C7.83594 8.15223 8.24219 7.73817 8.78125 7.73817C9.3125 7.73817 9.71875 8.15223 9.71875 8.68348C9.71875 9.21473 9.3125 9.6288 8.78125 9.6288Z'/></g></svg>"
        document.querySelector("#qlBtn > .svgWrapper").innerHTML = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='14.3828' height='14.3984'><g><path d='M2.45312 14.3984L11.9297 14.3984C13.5703 14.3984 14.3828 13.5859 14.3828 11.9766L14.3828 2.4375C14.3828 0.828125 13.5703 0.015625 11.9297 0.015625L2.45312 0.015625C0.820312 0.015625 0 0.820312 0 2.4375L0 11.9766C0 13.5938 0.820312 14.3984 2.45312 14.3984ZM2.46875 13.1406C1.6875 13.1406 1.25781 12.7266 1.25781 11.9141L1.25781 2.5C1.25781 1.6875 1.6875 1.27344 2.46875 1.27344L11.9141 1.27344C12.6875 1.27344 13.125 1.6875 13.125 2.5L13.125 11.9141C13.125 12.7266 12.6875 13.1406 11.9141 13.1406ZM9.64062 9.13281C9.98438 9.13281 10.2188 8.86719 10.2188 8.50781L10.2188 4.82031C10.2188 4.35938 9.96094 4.17969 9.5625 4.17969L5.85938 4.17969C5.49219 4.17969 5.25781 4.40625 5.25781 4.75C5.25781 5.09375 5.5 5.32031 5.875 5.32031L7.29688 5.32031L8.45312 5.19531L7.23438 6.32812L4.35156 9.21094C4.24219 9.32031 4.17188 9.47656 4.17188 9.63281C4.17188 9.98438 4.39844 10.2109 4.74219 10.2109C4.92969 10.2109 5.07812 10.1406 5.1875 10.0312L8.0625 7.15625L9.1875 5.95312L9.07031 7.17188L9.07031 8.52344C9.07031 8.89062 9.29688 9.13281 9.64062 9.13281Z'/></g></svg>"
    } else {
        document.querySelector("#homeBtn > .svgWrapper > svg").style.scale = "0.9";
        document.querySelector("#settingsBtn > .svgWrapper > svg").style.scale = "0.9";
        document.querySelector("#qlBtn > .svgWrapper > svg").style.scale = "0.9";
        document.querySelector("#homeBtn > .svgWrapper").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z' /></svg>"
        document.querySelector("#settingsBtn > .svgWrapper").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z' /></svg>"
        document.querySelector("#qlBtn > .svgWrapper").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z'/></svg>"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    registerDefault("iconTheme", "material")
    document.getElementById("ir-icons").value = load("iconTheme")
    registerDefault("theme", "auto")
    registerDefault("searchEngine", "https://www.duckduckgo.com/?q=%s")
    document.getElementById("uv-search-engine").value = load("searchEngine")
    switchIcons(load("iconTheme"))
});