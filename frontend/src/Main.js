import React, { useEffect, useState } from 'react'
import './Main.css'
import {  useNavigate } from 'react-router-dom'

function Main() {
    const [post, setpost] = useState([])
   
    const navigate=useNavigate()
    useEffect(() => {
        const getfunction = async () => {
            const getdata = await fetch("http://localhost:3002/getall")
            const total = await getdata.json()
            setpost(total)
            console.log(total);
            console.log("hii");




        }
        getfunction()

    }, [])
    console.log(post);
    const handlequntity = async (id, quantity) => {
        const newnumber = await Number(quantity)
        const str = await String(newnumber + 1)
        console.log(str);



        const data = await fetch('http://localhost:3002/patch', {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                id: id,
                number: str




            })
        })
        console.log(data);
        
        
        const getdata = await fetch("http://localhost:3002/getall")
            const total = await getdata.json()
            setpost(total)

    }
    const book=(food,quantity)=>{
        navigate(`/order/${food}/${quantity}`)
    }

    return (

        <div className='Main'>
            <div>
                <div  >
                    {post.map((cur) => {
                        return <div data-aos="fade-up" data-aos-duration="1000" className='inner' key={cur._id}> <h2>{cur.Foodname}</h2>
                            <h3><button onClick={() => handlequntity(cur._id, cur.quantity)}>Quantity</button>{cur.quantity}</h3>
                            <button style={{cursor:cur.quantity === "0" ? "not-allowed":"pointer"} } onClick={()=>book(cur.Foodname,cur.quantity)}> Book</button>
                        </div>
                    })}
                </div>
                <form data-aos="flip-up" data-aos-duration="1000"  className='mt-3 mb-5' id="demo">
                    <h2 style={{textAlign:'center'}}>Form</h2>
                <div className='form-group mb-2'>
                    <input type="text" className='form-control' placeholder='Enter the Name' />
                </div>
                <div className='form-group mb-2'>
                    <input type="email" className='form-control' placeholder='Enter the email' />
                </div>
                <div className='form-group mb-2'>
                    <input type="password" className='form-control' placeholder='Enter the password' />
                </div>
                <div className='form-group mb-2'>
                    <input type="submit" className='form-control'  />
                </div>
            </form>
            </div>
            


        </div>
    )
}

export default Main