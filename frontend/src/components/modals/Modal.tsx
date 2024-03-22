'use client'

import { useState } from 'react'

import { DeleteAccount } from './DeleteAccount'
import { ForgotPassword } from './ForgotPassword'
import { ModalWrapper } from './ModalWrapper'
import { NewPassword } from './NewPassword'

type TypeModalState = 'forgot-password' | 'new-password' | 'delete-account'

export const Modal = ({
	type,
	setIsOpenModal
}: {
	type: TypeModalState
	setIsOpenModal: (value: boolean) => void
}) => {
	const [modalState, setModalState] = useState<TypeModalState | 'none'>(type)

	const handleClose = () => {
		setIsOpenModal(false)
	}

	return (
		<ModalWrapper>
			{modalState === 'forgot-password' && (
				<ForgotPassword handleClose={handleClose} />
			)}
			{modalState === 'new-password' && <NewPassword />}
			{modalState === 'delete-account' && <DeleteAccount />}
		</ModalWrapper>
	)
}
