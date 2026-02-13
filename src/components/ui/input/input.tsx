import {
	HTMLAttributes,
	HTMLInputAutoCompleteAttribute,
	HTMLInputTypeAttribute,
	ReactNode,
} from "react"
import styles from "./input.module.scss"
interface InputProps extends HTMLAttributes<HTMLInputElement> {
	placeholder?: string
	name?: string
	type: HTMLInputTypeAttribute
	label?: ReactNode | string
	autoComplete?: HTMLInputAutoCompleteAttribute
	checked?: boolean
  value?: string 
}
export default function Input({
	placeholder,
	name,
	type,
	label,
	checked,
	autoComplete,
  value,
	...rest
}: InputProps) {
	return (
		<>
			{type === "checkbox" ? (
				<div className={styles.checkboxItem}>
					<input
						checked={checked}
						className={styles.checkboxInput}
						type='checkbox'
            value={value}
						{...rest}
					/>
					<label htmlFor={rest.id}>{label ?? ""}</label>
				</div>
			) : (
				<input
          value={value}
					type={type}
					name={name}
					className={styles.input}
					placeholder={placeholder}
					style={{ ...rest.style }}
					autoComplete={autoComplete}
					{...rest}
				/>
			)}
		</>
	)
}
