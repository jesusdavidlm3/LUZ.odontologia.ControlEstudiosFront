import { useContext, useState } from 'react'
import { appContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import React from 'react'
import { CreateStudentModal as CreateStudent } from './Modals'


const LatPanel = () => {

	const navigate = useNavigate()
	const { userInfo } = useContext(appContext)
	const [createStudentModal, setCreateStudentModal] = useState(false)

	return(
		<>
			<div className='LatPanel'>
				<Button size='large' type='primary' onClick={() => setCreateStudentModal(true)}>Registrar estudiante</Button>
				<Button size='large' type='primary' onClick={() => navigate('/home')} >Opcion 2</Button>
				<Button size='large' type='primary' onClick={() => navigate('/home')} >Opcion 3</Button>
				<Button size='large' type='primary' onClick={() => navigate('/home/')}>Opcion 4</Button>
			</div>

			<CreateStudent
				open={createStudentModal}
				onCancel={()=>setCreateStudentModal(false)}
				
			/>
		</>
	)
}

export default LatPanel