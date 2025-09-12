const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ruta para redirigir solicitudes a CoinMarketCap
app.get('/cryptos', async (req, res) => {
    try {
        const API_KEY = 'fbf8753c-b724-431e-ba6f-3bdd4232a7d0'; // Sustituye con tu API Key
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info', {
            headers: {
                'X-CMC_PRO_API_KEY': API_KEY,
            },
            params: {
                start: 1,
                limit: 100,  // Puedes ajustar este valor para obtener más o menos criptomonedas
                sort: 'market_cap', // Ordena por capitalización de mercado
                convert: 'USD',
            },
        });

        // Obtener las criptomonedas ordenadas por market_cap (de mayor a menor)
        const cryptos = response.data.data;
        const sortedCryptos = Object.values(cryptos)
            .sort((a, b) => b.quote.USD.market_cap - a.quote.USD.market_cap)  // Ordenar por market_cap
            .slice(0, 10);  // Tomar solo las 10 con mayor market_cap

        res.json(sortedCryptos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor proxy corriendo en http://localhost:${PORT}`);
});
