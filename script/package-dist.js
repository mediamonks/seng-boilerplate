#!/usr/bin/env node
'use strict';

const path = require('path');
const archiver = require('archiver');
const fs = require('fs-extra');

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

const createTarArchive = (archiveSrc, archiveDest) => createArchive(
	archiver('tar', { gzip: true, gzipOptions: { level: 9 } }),
	archiveSrc,
	archiveDest
);

const createZipArchive = (archiveSrc, archiveDest) => createArchive(
	archiver('zip', { level: 9 }),
	archiveSrc,
	archiveDest
);

Promise.resolve()
	.then(() => createTarArchive(src, `${dst}.tar.gz`))
	.then(() => createZipArchive(src, `${dst}.zip`))
	.then(() => createZipArchive(path.join(src, 'es6'), path.join(src, `${name}-${version}-es6.zip`)))
	.then(() => fs.remove(path.join(src, 'es6')))
	.catch(err =>
	{
		console.log(err);
		process.exit(1);
	});
