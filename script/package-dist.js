#!/usr/bin/env node
'use strict';

const path = require('path');
const archiver = require('archiver');
const fs = require('fs');

const { name, version } = require('../package.json');
const src = path.resolve(__dirname, '../dist');
const dst = path.join(path.resolve(__dirname, '..'), `${name}-${version}`);

const createArchive = (archive, src, compressedFile) =>
	new Promise((resolve, reject) => {
		const output = fs.createWriteStream(compressedFile);
		output.on('close', () => resolve());

		archive.on('error', (err) => reject(err));
		archive.pipe(output);
		archive.directory(src, '');
		archive.finalize();
	});

const createDistTar = () => createArchive(
	archiver('tar', { gzip: true, gzipOptions: { level: 9 } }),
	src,
	`${dst}.tar.gz`
);

const createDistZip = () => createArchive(
	archiver('zip', { level: 9 }),
	src,
	`${dst}.zip`
);

Promise.resolve()
	.then(createDistTar)
	.then(createDistZip)
	.catch(err =>
	{
		console.log(err);
		process.exit(1);
	});
