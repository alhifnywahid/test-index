fetch("https://www.sofascore.com/api/v1/sport/25200/event-count", {
	headers: {
		accept: "*/*",
		"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
		baggage: "sentry-environment=production,sentry-release=aQ1RDpPMzL3OsvpztGvt4,sentry-public_key=d693747a6bb242d9bb9cf7069fb57988,sentry-trace_id=0c509c8119619671d09bf38b4bf65504",
		"cache-control": "max-age=0",
		priority: "u=1, i",
		"sec-ch-ua": '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": '"Windows"',
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		"sentry-trace": "0c509c8119619671d09bf38b4bf65504-a788852498ac3461",
		"x-requested-with": "e590e0",
	},
	referrer: "https://www.sofascore.com/",
	referrerPolicy: "strict-origin-when-cross-origin",
	body: null,
	method: "GET",
	mode: "cors",
	credentials: "include",
	cookie:
		"_lr_env_src_ats=false; gcid_first=718c6a0e-ea5d-4006-8356-f191619b4169; __qca=P0-654768840-1739662619778; cto_bundle=fOkCK19reGZZQzJCc09UTENHeGxzVkVNNDZwUDQ4VGJFZXk5ZnFSWnolMkJxRTFsOWxzMFl2MFVNSk1SamJVJTJCZzVqTXI2TSUyQm5hSlU4ODFLTzBaUVM5M21oTENvSERjdHMxbm5BV0t2YjF1b0sxRHN5M2tuRTBPeVBjSHpMN2lSUlFmVXJwZ2hPcG9WSG1SYloxSzBSY0hEaWQ0bGclM0QlM0Q; _ga=GA1.1.1366186415.1739662621; _lr_geo_location_state=JI; _lr_geo_location=ID; FCNEC=%5B%5B%22AKsRol-DNBHIxDphH_OgGdExt8d50h59KUvECT4IDOb-lOeRA5mdc3s_Ge1tgsyKHnuqWM1Rma3CY5df4IjO_n5UWrb8kBneD1Dfty9dK19M3STT75iQYPhtVShqJdkCix7uW4aJSezpAGQ2R1su5YwPy35EWov6IA%3D%3D%22%5D%5D; _ga_HNQ9P9MGZR=GS1.1.1739662621.1.1.1739663030.60.0.0; _lr_retry_request=true; __gads=ID=314fe24d870892a1:T=1739638594:RT=1739746048:S=ALNI_MZqCvHuF-US_55aHadjLpucOerGrg; __gpi=UID=0000103b08aab42d:T=1739638594:RT=1739746048:S=ALNI_MY0rXFWUXUUraEmP0gGVt6Iax9ubg; __eoi=ID=c4bdac2f73e296ad:T=1739638594:RT=1739746048:S=AA-AfjZOlkYaeJ_A2pIYvLaS7BER",
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
})
	.then((res) => res.json())
	.then((res) => console.log(res));
