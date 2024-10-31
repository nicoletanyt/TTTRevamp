import React from 'react'

export default function LeftPicture({img, text}) {
  return (
		<div>
			<img src={img} />
			<p>{text}</p>
		</div>
	);
}
