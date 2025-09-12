import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Componente TarjetaCrypto
const TarjetaCrypto = ({ name, symbol, price }) => {
    return (
        <div className="tarjeta-crypto">
            <h2>{name} ({symbol})</h2>
            <p>Precio: ${price.toFixed(2)}</p>
        </div>
    );
};

// Componente CryptoList
const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    console.log(cryptos)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cryptos');
                setCryptos(response.data.data);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
    
        fetchCryptos();
    }, []);
    

    if (loading) return <p>Cargando datos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Criptomonedas</h1>
            <div className="crypto-list">
                {
                cryptos.map((crypto) => (
                    <TarjetaCrypto
                        key={crypto.id}
                        name={crypto.name}
                        symbol={crypto.symbol}
                        price={crypto.quote.USD.price}
                    />
                ))
                }
            </div>
        </div>
    );
};

export default CryptoList;
