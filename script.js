// the string below is "the internet cave" in full width unicode characters
if (
	window.location.hash ==
	"#%20%EF%BD%94%EF%BD%88%EF%BD%85%20%EF%BD%89%EF%BD%8E%EF%BD%94%EF%BD%85%EF%BD%92%EF%BD%8E%EF%BD%85%EF%BD%94%20%EF%BD%83%EF%BD%81%EF%BD%96%EF%BD%85"
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
}
