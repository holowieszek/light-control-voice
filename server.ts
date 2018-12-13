import app from './src/app';

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});