const Table = () => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td  className='acima'>Abaixo de 18,5</td>
                    <td className='abaixo'>Abaixo do peso</td>
                </tr>
                <tr>
                    <td>Entre 18,6 e 24,9</td>
                    <td>Peso ideal</td>
                </tr>
                <tr>
                    <td>Entre 25,0 e 29,9</td>
                    <td>Levemente acima do peso</td>
                </tr>
                <tr>
                    <td>Entre 30,0 e 34,9</td>
                    <td>Obesidade grau I</td>
                </tr>
                <tr>
                    <td>Entre 35,0 e 39,9</td>
                    <td>Obesidade grau II - Severa</td>
                </tr>
                <tr>
                    <td>Acima de 40,0</td>
                    <td>Obesidade grau III - Mórbida</td>
                </tr>
            </tbody>
        </table>
        )
    }
    
    export default Table;