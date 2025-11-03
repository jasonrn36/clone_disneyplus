const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');


const pastaEntrada = 'src/Images';
const pastaSaida = 'dist/Images';

fs.ensureDirSync(pastaSaida);

glob(`${pastaEntrada}/**/*.{jpg,jpeg,png,gif}`, (err, arquivos) => {
if (err) {
    console.error('Erro ao buscar imagens:', err);
    return;
}

arquivos.forEach(async (arquivo) => {
    const extensao = path.extname(arquivo).toLowerCase();
    const caminhoRelativo = path.relative(pastaEntrada, arquivo);
    const destino = path.join(pastaSaida, caminhoRelativo);

    try {
      await fs.ensureDir(path.dirname(destino)); // Garante que a subpasta exista

    if (extensao === '.jpg' || extensao === '.jpeg') {
        await sharp(arquivo).jpeg({ quality: 75 }).toFile(destino);
    } else if (extensao === '.png') {
        await sharp(arquivo).png({ compressionLevel: 9 }).toFile(destino);
    } else if (extensao === '.gif') {
        await sharp(arquivo).gif({ effort: 3 }).toFile(destino);
    }

    console.log(`Imagem comprimida: ${arquivo} → ${destino}`);
    } catch (erro) {
    console.error(`Erro ao processar ${arquivo}:`, erro.message);
    }
});
});
