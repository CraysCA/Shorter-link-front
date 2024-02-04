import { useState } from 'react'

function Dashboard() {
	return (
		<>
			<div className="grid h-screen place-items-center">
				<form className="w-[30rem] h-[30rem] rounded-lg text-center flex flex-col gap-6 bg-[#16181c] p-6 relative">
					<h1 className="text-5xl">Agrega tu link</h1>
					<input
						type="text"
						placeholder="https://example.com"
						className="py-3 rounded-md bg-[#04060f] px-4"
					/>
					<p>
						Utiliza nuestro servicio para acortar la URL de tu enlace y obtén la
						cantidad de clics que ha recibido. Esto te permitirá comprender
						mejor el impacto y alcance de tus enlaces compartidos. Además,
						también puedes agregar contraseñas a estos enlaces para una mayor
						seguridad y control.
					</p>
					<div className="flex-1 flex justify-end items-end">
						<button className="border border-black py-4 px-2 rounded-md w-full hover:bg-[#04060f]">
							Acortar Link
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Dashboard
