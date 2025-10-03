import * as bcrypt from 'bcrypt';

async function generateHash() {
  const password = '123456';
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  console.log('Hash gerado para a senha 123456:');
  console.log(hash);
}

generateHash();