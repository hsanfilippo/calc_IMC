import { useState } from "react";
import './form.css'

const Form = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const retornaIMC = () =>  peso / Math.pow(altura, 2) * 10000;

    return (
        <>
        <form className='mt-5'>
            <ul className='p-0'>
                <li className='d-flex mt-4'>
                    <div className="input-group mb-3">
                        <label htmlFor="altura" className='mb-1 fw-bold fs-5 me-2 form'>Altura</label>
                        <input id="altura" type="number" className="form-control rounded-1" min="1" onChange={(e) => altura = setAltura(e.target.value)}/>
                        <span className="input-group-text">cm</span>
                    </div>
                </li>
                <li className='d-flex mt-4'>
                    <div className="input-group mb-3">
                        <label htmlFor="peso" className='mb-1 fw-bold fs-5 me-2 form'>Peso</label>
                        <input id="peso" type="number" className="form-control rounded-1" min="1" onChange={(e) => peso = setPeso(e.target.value)}/>
                        <span className="input-group-text">kg</span>
                    </div>
                </li>
            </ul>
        </form>
        <div className="class"></div>
        <div className="text-center bg-primary pt-3 pb-1 rounded-3 text-white fw-bold">
            <p>{`Seu IMC é: ${retornaIMC().toFixed(2)}`}</p>
            <p className={(retornaIMC() > 0 && retornaIMC() <= 18.5) ? "abaixo pt-4 pb-4 text-dark" : "oculto"}>{'Abaixo do peso'}</p>
            <p className={(retornaIMC() >= 18.6 && retornaIMC() <= 24.9) ? "ideal pt-4 pb-4 text-dark" : "oculto"}>{'Peso ideal'}</p>
            <p className={(retornaIMC() >= 25 && retornaIMC() <= 29.9) ? "acima pt-4 pb-4 text-dark" : "oculto"}>{'Levemente acima do peso'}</p>
            <p className={(retornaIMC() >= 30 && retornaIMC() <= 34.9) ? "grauI pt-4 pb-4" : "oculto"}>{'Obesidade grau I'}</p>
            <p className={(retornaIMC() >= 35 && retornaIMC() <= 39.9) ? "grauII pt-4 pb-4" : "oculto"}>{'Obesidade grau II'}</p>
            <p className={(retornaIMC() >= 40) ? "grauIII pt-4 pb-4" : "oculto"}>{'Obesidade grau III'}</p>
        </div>
        </>
        
        )
    } 
    
    export default Form; 