// internet cave
if (
	window.location.hash ==
	// this string is "the internet cave" in full width unicode characters
	"#%EF%BD%94%EF%BD%88%EF%BD%85%EF%BD%89%EF%BD%8E%EF%BD%94%EF%BD%85%EF%BD%92%EF%BD%8E%EF%BD%85%EF%BD%94%EF%BD%83%EF%BD%81%EF%BD%96%EF%BD%85"
) {
	const urls = [
		"https://puzzle.suchfun.net/",
		"https://xanadu.com",
		"https://somethingawful.com/hosted/jeffk",
		"http://mspaintadventures.com/sweetbroandhellajeff/",
		"http://textfiles.com/",
		"http://catb.org/jargon/html",
		"https://johnclilly.com/hub.html",
		"https://sbnation.com/a/17776-football",
		"https://horg.com/",
		"https://truegamer.net/SA_911/911%20SATHREAD",
		"https://theghostinthemp3.com/theghostinthemp3.html",
		"https://cameronsworld.net",
		"https://garrettmdavis.com",
		"http://data.pcmusic.info",
		"https://billwurtz.com",
		"https://timecube.2enp.com",
		"https://gifcities.org",
		"https://if-jesus-returns-kill-him-again.com",
		"http://subgenius.com",
		"http://phrack.org",
		"https://laglab.org",
		"http://art.teleportacia.org",
		"https://blog.geocities.institute",
		"https://shedd.ml",
	];
	const i = Math.floor(Math.random() * urls.length);
	location.href = urls[i];
	// emoji code for extra bullet points
} else if (window.location.hash.startsWith("#%F0")) {
	const emojis = decodeURI(window.location.hash.substring(1));
	const separator = emojis.indexOf("🧐");

	let primaryText = "";
	for (let i = 0; i < separator; i += 2) {
		primaryText += String.fromCodePoint(emojis.codePointAt(i) - 128480);
	}

	let secondaryText = "";
	for (let i = separator + 2; i < emojis.length; i += 2) {
		secondaryText += String.fromCodePoint(emojis.codePointAt(i) - 128480);
	}

	const newItem = document.createElement("li");
	newItem.innerHTML = `<a href="">${primaryText}<span class="mouseover-only">: ${secondaryText}</span></a>`;

	document.addEventListener("DOMContentLoaded", () => {
		const list = document.getElementById("links");
		list.appendChild(newItem);
	});
}
