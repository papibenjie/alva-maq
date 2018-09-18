import Button from "../button";
import Headline, { HeadlineLevel } from "../headline";
import * as React from "react";
import Teaser from "./index";

export default function ButtonDemo() {
	return (
		<Teaser headline={
			<Headline level={HeadlineLevel.H1}>Start your designs with Stacked</Headline>
		}
		button={
			<Button>Start your designs with Stacked</Button>
		} />
	);
}
