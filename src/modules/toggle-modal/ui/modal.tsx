"use client"
import Portal from "@/components/portal/portal"
import Button from "@/components/ui/button/button"
import Input from "@/components/ui/input/input"
import Heading from "@/components/ui/typography/heading/heading"
import Text from "@/components/ui/typography/text/text"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { useFormModal } from "../model/hooks/useFormModal"
import { useIsClient } from "../model/hooks/useIsClient"
import styles from "./../toggle-modal.module.scss"
export default function Modal({
	setShow,
	show,
}: {
	setShow: Dispatch<SetStateAction<boolean>>
	show: boolean
}) {
	const isClient = useIsClient()
	const {
		formData,
		formErrors,
		handleFieldChange,
		handleChangePhoneNumber,
		sendFeedback,
	} = useFormModal()
  
	if (!isClient) return
	return (
		<>
			<Portal container={document.body}>
				<div
					onClick={() => setShow(false)}
					className={`${styles.overlay} ${show ? styles.active : ""}`}
				></div>
				<div className={`${styles.modal} ${show ? styles.active : ""}`}>
					<div className={styles.modalHeader}>
						<Heading as='h2'>Связаться с нами</Heading>
						<button onClick={() => setShow(false)}>
							<Image
								src='/close.svg'
								alt=''
								width={0}
								height={0}
								sizes='100vw'
								className={styles.closeImage}
							/>
						</button>
					</div>
					<form onSubmit={sendFeedback} className={styles.modalForm}>
						<div className={styles.inputs}>
							<div className=''>
								<Input
									onChange={e => handleFieldChange("name", e.target.value)}
									autoComplete='name'
									name='name'
									type='text'
									placeholder='Имя'
									value={formData.name}
								/>
								{formErrors.name && <p>{formErrors.name}</p>}
							</div>
							<div className=''>
								<Input
									onChange={handleChangePhoneNumber}
									name='telephone'
									autoComplete='tel'
									type='tel'
									placeholder='Телефон'
									value={formData.phone}
								/>
								{formErrors.phone && <p>{formErrors.phone}</p>}
							</div>
							<div className=''>
								<Input
									onChange={e => handleFieldChange("email", e.target.value)}
									name='email'
									type='email'
									autoComplete='email'
									placeholder='E-mail'
									value={formData.email}
								/>
								{formErrors.email && <p>{formErrors.email}</p>}
							</div>
							<div style={{ marginTop: "6px" }} className=''>
								<Input
									checked={formData.checked}
									onChange={e => handleFieldChange("checked", e.target.checked)}
									type='checkbox'
									id='policy-checkbox'
									label={
										<Text color='rgba(0,0,0, 0.5)' as='span' variant='caption'>
											Я согласен (-а) на обработку персональных данных
										</Text>
									}
								/>
                {formErrors.checked && <p>{formErrors.checked}</p>}
							</div>
						</div>
						<Button
							style={{ maxWidth: "126px", marginTop: "30px" }}
							bgColor='#fff'
							color='black'
						>
							Отправить
						</Button>
					</form>
				</div>
			</Portal>
		</>
	)
}
