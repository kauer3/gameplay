import React from "react";
import {Image} from "react-native";

import {styles} from "./styles";

export function GuildIcon({data, ...rest}: Props) {
	const uri = 'https://wiki.faforever.com/images/e/e9/Discord-icon.png';
	return (
		<Image
			source={{uri}}
			style={styles.image}
			resizeMode="cover"
		/>
	)
}
