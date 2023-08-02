<button class="root"><slot /></button>

<style>
	.root {
		width: fit-content;
		position: relative;
		padding-top: 5px;
		padding-bottom: 5px;
		padding-left: 10px;
		padding-right: 14px;
		transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;
		transform: translateX(-10px) translateY(-5px);
		overflow: hidden;
		/* background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25); */
		/* box-shadow: 4px 4px 6px -5px #000000; */
	}

	.root::after {
		content: '›';
		margin-left: 10px;
		position: relative;
		bottom: 1px;
		display: inline-block;
		transform: translateX(0) scale(1.4);
	}

	.root::before {
		content: '';
		z-index: -1;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		transition: clip-path 0.2s linear;
		clip-path: circle(0% at 50% 50%);
		background-color: var(--color-bg-secondary);
	}

	.root:hover,
	.root:focus {
		outline: none;
		transform: translateX(0) translateY(0);
	}

	.root:hover::after,
	.root:focus::after {
		animation: swing 0.4s ease-in-out infinite forwards alternate-reverse;
	}

	.root:hover::before,
	.root:focus::before {
		clip-path: circle(100% at 50% 50%);
	}

	@keyframes swing {
		from {
			transform: translateX(-1px) scale(1.4);
		}
		to {
			transform: translateX(4px) scale(1.4);
		}
	}
</style>
