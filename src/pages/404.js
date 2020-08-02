import React from 'react';

const NotFoundPage = () =>
	typeof window !== 'undefined' ? (window.location = '/') : <></>;

export default NotFoundPage;
