import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BanCuocItem from './BanCuocItem'
import renderImage from '../ReduxHook/action/renderImage'

export default function BanCuoc() {
    let [random, setRandom] = useState([1, 2, 3])
    let [status, setStatus] = useState(false)

    const dispatch = useDispatch()

    const { banBauCua } = useSelector(
        (state) => state.bauCuaReducer
    )

    

    const handleRandom = () => {
        setStatus(status = true)

        setTimeout(function () {
            let x = Math.round(Math.random() * 5 + 1)
            let y = Math.round(Math.random() * 5 + 1);
            let z = Math.round(Math.random() * 5 + 1);

            let currentRandom = [x, y, z]
            console.log(x, y, z)

            setRandom(currentRandom)

            dispatch({
                type: "XOC",
                value: currentRandom
            })

            setStatus(status = false)


        }, 3000);


    }


    return (
        <div className="row">
            {console.log("banBauCua", banBauCua)}
            <div className="col-9">
                <div className="row container mt-5">
                    {banBauCua.map(item =>
                        <BanCuocItem item={item} key={item.id} />
                    )}

                </div>
            </div>
            <div className="col-3">
                <div className="xoc text-center mt-5">
                    <div className={status ? "shaking" : ""}>
                        <div><img src={renderImage(random[0])} alt="" /></div>
                        <div className="my-3"><img src={renderImage(random[1])} alt="" /></div>
                        <div><img src={renderImage(random[2])} alt="" /></div>
                    </div>

                    <button className="btn btn-success mt-5" onClick={handleRandom}>Roll Dice</button>
                </div>
            </div>
        </div>
    )
}

