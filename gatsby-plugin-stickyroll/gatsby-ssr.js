import React from "react"
import { Stickyroll } from "@stickyroll/stickyroll"

exports.onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([Stickyroll.getStyleTag()])
}
