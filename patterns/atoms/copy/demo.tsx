import * as React from 'react';
import Copy, { Size as CopySize } from 'Pattern';

const CopyDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Copy>
				Lorem ipsum dolor sit, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
			</Copy>
			<Copy size={CopySize.S}>
				Lorem ipsum dolor sit, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
			</Copy>
		</div>
	);
};

export default CopyDemo;
