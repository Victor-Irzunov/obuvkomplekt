import FormOrder from "../Form/Form";

const Modal = ({ selectedProduct }) => {
	return (
		<dialog id="my_modal_3" className="modal">
			<div className="modal-box">
				<h3 className="font-semibold text-lg">{selectedProduct ? `Ваш заказ: ${selectedProduct}` : 'Заказать доставку'}</h3>
				<p className="py-4">
					Пожалуйства заполните данные формы, чтобы оформить заказ.
				</p>
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<FormOrder selectedProduct={selectedProduct} />
			</div>
		</dialog>
	)
}

export default Modal;