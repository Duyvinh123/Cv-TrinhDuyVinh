import React, { useEffect, useState } from 'react'
import './MenuSelection.css'
import { Link } from 'react-router-dom'


const MenuSelection = () => {

    const data = [
        {
            title: 'about me',
            id: 1
        },
        {
            title: 'project',
            id: 2
        },
        {
            title: 'contact',
            id: 3
        }
    ]

    const [selection, setSelection] = useState(1)

    const handleOnClickPlus = () => {

        if (selection === 3) {
            setSelection(1)
        }
        else {
            setSelection(x => x + 1)
        }
    }

    const handleOnClickSubtract = () => {

        if (selection <= 1) {
            setSelection(3)
        }
        else {
            setSelection(x => x - 1)
        }
    }


    useEffect(() => {
        if (localStorage.getItem('select') === null) {
            setSelection(1)
        }else{
            setSelection(JSON.parse(localStorage.getItem('select')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('select', selection)
    }, [selection])


    return (
        <div className="menuSelection">
            <div className="menuSelection__contents">

                {
                    data.map((data, index) => {
                        return (data.id === (selection + 1 <= 3 ? selection + 1 : 1)
                            && (
                                <Link key={index}
                                    className='menuSelection__link'
                                    to={`/${data.title === 'about me' ? '' : data.title}`}
                                >
                                    <h1

                                        className='menuSelection__item'
                                        onClick={handleOnClickPlus}>
                                        {data.title}
                                    </h1>
                                </Link>
                            )
                        )
                    })
                }
                {
                    data.map((data, index) => {
                        return (data.id === selection && (
                            <h1
                                key={index}
                                className='h1__main' >{data.title}
                            </h1>
                        )
                        )
                    })
                }
                {
                    data.map((data, index) => {
                        return (data.id === (selection + 2 <= 3 ? selection + 2 : (selection + 2 === 4 ? 1 : 2))
                            && (
                                <Link
                                    key={index}
                                    className='menuSelection__link'
                                    to={`/${data.title === 'about me' ? '' : data.title}`}
                                >
                                    <h1
                                        className='menuSelection__item'
                                        onClick={handleOnClickSubtract}>
                                        {data.title}
                                    </h1>
                                </Link>
                            )
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenuSelection
