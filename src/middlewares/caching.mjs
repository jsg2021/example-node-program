export default function (_, res, next) {
	if (!res.headersSent) {
		res.setHeader('Cache-Control', [
			'no-cache',
			'no-store',
			'must-revalidate',
			'max-age=0'
		].join(', '));
		res.setHeader('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT'); //old, but still arounad :(
		res.setHeader('Pragma', 'no-cache'); //old, but still arounad :(
	}
	next();
}
