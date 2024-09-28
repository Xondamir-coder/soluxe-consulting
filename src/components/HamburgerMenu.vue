<template>
	<div class="menu">
		<div class="bar"></div>
		<div class="bar"></div>
		<div class="bar"></div>
	</div>
</template>

<style lang="scss" scoped>
.bar:nth-of-type(1) {
	top: 7px;
	transition: top 0.3s ease 0.3s, transform 0.3s ease-out 0.1s;
}
.bar:nth-of-type(2) {
	top: 14px;
	transition: ease 0.3s 0.3s;
}
.bar:nth-of-type(3) {
	top: 21px;
	transition: top 0.3s ease 0.3s, transform 0.3s ease-out 0.1s;
}
.menu {
	height: 40px; /* Further reduced size */
	width: 40px; /* Further reduced size */
	position: relative;
	margin: auto;
	padding-top: 5px;
	border: 2px solid transparent; /* Adjusted for smaller size */
	border-radius: 100%;
	transition: 0.3s;
	cursor: pointer;
	&.active {
		transition: transform 0.3s ease 0.5s;
		transform: rotate(45deg);
		& .bar:nth-of-type(1) {
			top: 14px;
			transform: rotate(0deg);
			transition: top 0.3s ease 0.1s, transform 0.3s ease-out 0.5s;
		}
		& .bar:nth-of-type(2) {
			opacity: 0;
		}
		& .bar:nth-of-type(3) {
			top: 14px;
			transform: rotate(90deg);
			transition: top 0.3s ease 0.1s, transform 0.3s ease-out 0.7s;
		}
	}
}
.bar {
	position: absolute;
	height: 2px; /* Reduced size */
	width: 30px; /* Reduced size */
	display: block;
	margin: 6px auto;
	background-color: var(--black);
	border-radius: 10px;
	transition: 0.4s;
}
</style>
