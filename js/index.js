var animation = bodymovin.loadAnimation({
  container: document.getElementById('animContainer'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'Main.json'
	
})

//inter explorer dectector
if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
{
  alert("Please Update your browser to lastest version.");
}