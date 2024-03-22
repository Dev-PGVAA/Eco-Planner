export function forgotPasswordMail(code: string) {
	return `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
	
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
	
				body {
					background: #fafafa;
					justify-content: center;
					font-family: 'Work Sans', sans-serif;
				}
				header {
					padding: 10px;
					background-color: #b0b0b0;
					border-radius: 0 0 15px 15px;
					display: grid;
					grid-template-columns: auto fit-content(100%);
				}
				header h2 {
					font-weight: 600;
					transform: translateY(10px);
				}
				header div {
					display: flex;
				}
				header div h1 {
					margin-left: 5px;
					transform: translateY(4px);
				}
	
				main {
					margin-top: 20px;
					display: grid;
					grid-template-rows: repeat(2, auto);
					justify-content: center;
					font-size: 24px;
				}
				main span {
					font-weight: bold;
					color: #823afa;
				}
				main p {
					margin: 10px;
				}
				footer {
					padding: 5px;
					display: grid;
					justify-content: center;
					margin-top: 200px;
				}
				footer a {
					color: #823afa;
					text-decoration: none;
				}
				footer a:hover {
					text-decoration: underline;
				}
			</style>
		</head>
		<body>
			<header>
				<div>
					<svg
						width="40"
						height="40"
						viewBox="0 0 43 43"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M15 23C13.8954 23 13 23.8954 13 25V27C13 28.1046 13.8954 29 15 29H17C18.1046 29 19 28.1046 19 27V25C19 23.8954 18.1046 23 17 23H15ZM15 25V27H17V25H15Z"
							fill="#505050"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M21 25C21 23.8954 21.8954 23 23 23H25C26.1046 23 27 23.8954 27 25V27C27 28.1046 26.1046 29 25 29H23C21.8954 29 21 28.1046 21 27V25ZM23 25H25V27H23V25Z"
							fill="#505050"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M31 23C29.8954 23 29 23.8954 29 25V27C29 28.1046 29.8954 29 31 29H33C34.1046 29 35 28.1046 35 27V25C35 23.8954 34.1046 23 33 23H31ZM31 25V27H33V25H31Z"
							fill="#505050"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13 33C13 31.8954 13.8954 31 15 31H17C18.1046 31 19 31.8954 19 33V35C19 36.1046 18.1046 37 17 37H15C13.8954 37 13 36.1046 13 35V33ZM15 35V33H17V35H15Z"
							fill="#505050"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M23 31C21.8954 31 21 31.8954 21 33V35C21 36.1046 21.8954 37 23 37H25C26.1046 37 27 36.1046 27 35V33C27 31.8954 26.1046 31 25 31H23ZM25 33H23V35H25V33Z"
							fill="#505050"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M29 33C29 31.8954 29.8954 31 31 31H33C34.1046 31 35 31.8954 35 33V35C35 36.1046 34.1046 37 33 37H31C29.8954 37 29 36.1046 29 35V33ZM31 35V33H33V35H31Z"
							fill="#505050"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M16 6C15.4477 6 15 6.44772 15 7V10H11C8.79086 10 7 11.7909 7 14V38C7 40.2092 8.79086 42 11 42H37C39.2091 42 41 40.2092 41 38V14C41 11.7909 39.2091 10 37 10H35V13C35 13.5523 34.5523 14 34 14C33.4477 14 33 13.5523 33 13V7C33 6.44772 32.5523 6 32 6C31.4477 6 31 6.44772 31 7V10H19V13C19 13.5523 18.5523 14 18 14C17.4477 14 17 13.5523 17 13V7C17 6.44772 16.5523 6 16 6ZM9 38V21H39V38C39 39.1046 38.1046 40 37 40H11C9.89543 40 9 39.1046 9 38Z"
							fill="#161616"
						/>
					</svg>
	
					<h1>Eco-Planner</h1>
				</div>
				<h2>Verify your email</h2>
			</header>
			<main>
				<p>Verification code:&nbsp;<span>${code}</span></p>
	
				<p>
					You are receiving this email because you have signed up for Eco-Planner.
				</p>
			</main>
			<footer>
				<p>
					Please do not reply to this email. If you have any questions, please
					contact us at
					<a href="mailto:programmingvaa@gmail.com">programmingvaa@gmail.com</a>
				</p>
			</footer>
		</body>
	</html>`
}