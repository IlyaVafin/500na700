import { ChangeEvent, SubmitEvent, useState } from "react"
import { formatPhoneNumber } from "../formatPhoneNumber"

export const useFormModal = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		checked: false,
	})
	const [formErrors, setFormErrors] = useState({
		name: "",
		phone: "",
		email: "",
		checked: "",
	})

	const handleFieldChange = (key: string, value: string | boolean) => {
		setFormData(prev => ({
			...prev,
			[key]: value,
		}))
	}

	const handleChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
		const formatted = formatPhoneNumber(e.target.value)
		setFormData(prev => ({ ...prev, phone: formatted }))
	}

	const validateName = (name: string) => name.length > 2
	const validateEmail = (email: string) =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	const validatePhone = (phone: string) => phone.length === 18

	const sendFeedback = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (
			validateEmail(formData.email) &&
			validateName(formData.name) &&
			formData.checked &&
			validatePhone(formData.phone)
		) {
			alert("Обратная связь отправлена")
			console.log(formData)
		} else {
			if (!validateEmail(formData.email))
				setFormErrors(prev => ({ ...prev, email: "Неккоректный email" }))
			if (!validateName(formData.name))
				setFormErrors(prev => ({ ...prev, name: "Неккоректное имя" }))
			if (!validatePhone(formData.phone))
				setFormErrors(prev => ({ ...prev, phone: "Неккоректный телефон" }))
			if(!formData.checked) setFormErrors(prev => ({...prev, checked: "Согласитесь с условиями"}))
		}
	}
	return {
		handleFieldChange,
		formData,
		handleChangePhoneNumber,
		sendFeedback,
		formErrors
	}
}
