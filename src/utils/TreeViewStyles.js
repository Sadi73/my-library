export const TreeViewStyles = `
.tree {
	text-align: center;
	overflow-x: auto;
}

.tree ul {
	padding: 0;
	padding-top: 20px;
	position: relative;
	transition: .5s;
	white-space: nowrap;
}

.tree li {
	display: inline-table;
	text-align: center;
	list-style-type: none;
	position: relative;
	padding: 10px;
	transition: .5s;
}

.tree li::before,
.tree li::after {
	content: '';
	position: absolute;
	top: 0;
	right: 50%;
	border-top: 1px solid #ccc;
	width: 51%;
	height: 10px;
}

.tree li::after {
	right: auto;
	left: 50%;
	border-left: 1px solid #ccc;
}

.tree li:only-child::after,
.tree li:only-child::before {
	display: none;
}

.tree li:only-child {
	padding-top: 0;
}

.tree li:first-child::before,
.tree li:last-child::after {
	border: 0 none;
}

.tree li:last-child::before {
	border-right: 1px solid #ccc;
	border-radius: 0 5px 0 0;
	-webkit-border-radius: 0 5px 0 0;
	-moz-border-radius: 0 5px 0 0;
}

.tree li:first-child::after {
	border-radius: 5px 0 0 0;
	-webkit-border-radius: 5px 0 0 0;
	-moz-border-radius: 5px 0 0 0;
}

.tree ul ul::before {
	content: '';
	position: absolute;
	top: 0;
	left: 50%;
	border-left: 1px solid #ccc;
	width: 0;
	height: 20px;
}

.tree li img {
	width: 50px;
	height: 50px;
	margin-bottom: 10px !important;
	border-radius: 100px;
	margin: auto;
}

.tree li span {
	display: inline-grid;

	border: 1px solid #ccc;
	border-radius: 5px;
	color: #666;
	padding: 8px;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 500;
}
`