"use client"
import { useState } from 'react';

const FormOrder = ({selectedProduct}) => {
	const [formData, setFormData] = useState({ phone: '', message: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		// Здесь вы можете отправить данные на сервер или выполнить другие действия с данными формы
		console.log('Отправленные данные:', formData);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="w-full  bg-base-100">
			<form className="" onSubmit={handleSubmit}>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Телефон</span>
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Ваш телефон"
						className="input input-bordered"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Сообщение</span>
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="textarea textarea-bordered"
						placeholder="Ваше сообщение"
					></textarea>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-primary" type="submit">
						Заказать
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormOrder;
