import React, { useState, useCallback } from 'react';
import Button from './Button';
import Title from './Title';
import Count from './Count';

function Main() {
    // const [age, setAge] = useState(24);
    // const [salary, setSalary] = useState(50);

    
    // const incrementAge = useCallback(() => {
    //     setAge(age +1)      
    // },[age]) 

    // const incrementSalary = useCallback(() => {
    //     setSalary(salary + 500)
    // },[salary]) 

    // return (

    //     <>
    //       <Title />
    //       <Count text="Age" count={age} />  
    //       <Button handleClick={incrementAge}>Increment Age</Button>
    //       <Count text="Salary" count={salary} />  
    //       <Button handleClick={incrementSalary}>Increment Salary</Button>          
    //     </>
    // )

    const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

export default Main
