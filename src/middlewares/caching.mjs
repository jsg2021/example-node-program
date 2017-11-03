export default function (_, res, next) {
	if (!res.headersSent) {
		res.setHeader('Cache-Control',	'private, no-cache, no-store, ' +
										'must-revalidate, max-stale=0, ' +
										'post-check=0, pre-check=0');
		res.setHeader('Expires', '-1'); //old, but still arounad :(
		res.setHeader('Pragma', 'no-cache'); //old, but still arounad :(
	}
	next();
}
