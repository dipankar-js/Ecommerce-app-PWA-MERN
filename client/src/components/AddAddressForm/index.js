import React from 'react';
import classnames from 'classnames';
import FormInput from '../FormInput';
import { useForm } from 'react-hook-form';
import Button from '../Button';

import './style.scss';

const AddAddressForm = ({ onAddressSubmit, showing }) => {
	const { handleSubmit, register, errors, setValue } = useForm();

	return (
		<form
			onSubmit={handleSubmit(onAddressSubmit)}
			className={classnames(
				'new-address-form',
				showing !== 'address' && 'address'
			)}
			id='new-address-form'
		>
			<FormInput
				label='Area/Locality'
				placeholder='E.g. Sector 13 or Chandigarh'
				ref={register}
				name='area'
			/>
			<div className='checkout-name'>
				<FormInput
					label='Name'
					placeholder='First Name'
					className='name'
					ref={register}
					name='firstName'
				/>
				<FormInput
					hiddenLabel='LastName'
					placeholder='Last Name'
					className='name'
					ref={register}
					name='lastName'
				/>
			</div>
			<FormInput label='Address' ref={register} name='address' />
			<FormInput
				label='City'
				placeholder='E.g. Sector 13 or Chandigarh'
				ref={register}
				name='city'
			/>
			<FormInput label='State' ref={register} name='state' />
			<FormInput label='Pincode' ref={register} name='zip' type='number' />
			<FormInput
				required
				register={register}
				setValue={setValue}
				pattern='^(\\+91)?-?[0-9]{10}$'
				label='Phone Number'
				placeholder='Phone Number11'
				name='phoneNumber'
				kry='phoneNumber'
				id='phoneNumber'
				className='phoneNumber'
				masked
				format='+91-##########'
				mask='_'
			/>
			<div className='action-buttons'>
				<Button
					buttonText={'Continue'}
					buttonType='filled'
					className='medium label-6'
					type='submit'
				/>
			</div>
		</form>
	);
};

export default AddAddressForm;
