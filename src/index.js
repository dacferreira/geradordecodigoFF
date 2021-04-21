const puppeteer = require('puppeteer');
require('dotenv/config');

 async function rodar () {

    console.log('Gerando os codiguin.....')
    let numeros = [];  
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const input_serial_1 = 'SNQN'
    const input_serial_2 = 'U'
    let i = 0
    
    
  
    while (numeros.length < 100000) {
        let text = ''
        
            for (let i = 0; i < 7; i++){
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
        
        
            

            if (numeros.indexOf(text) == -1){
                    numeros.push(text);         
                
            }
                
    }

    console.clear()
    
    process.stdout.write('Rodando o Robô.....')
     const browser = await puppeteer.launch({
         headless: false
     })
     const page = await browser.newPage()
     await page.setViewport({
         width: 1366,
         height:768
     })
     await page.goto('https://facebook.com')
     await page.waitFor('input[name=email]')
     await page.type('input[name=email]',"diogoa42@gmail.com",{
         delay: 120
     })
     await page.type('input[name=pass]',"isweinthetape123*",{
         delay: 120
     })
     await page.keyboard.press('Enter');
     setTimeout(async () => {
         await page.goto('https://reward.ff.garena.com/pt')
     }, 5000)
    //  await page.waitFor('.facebook')
    //  await page.click('.facebook')
     await page.waitFor('div.button.main__login-button')
     await page.click('div.button.main__login-button')
     await page.waitFor('.input-btn')

            for(let cod of numeros){
                console.clear()
                process.stdout.write('Codiguins testados: '+i)
                  try {
                    //await page.waitFor('.input-btn')
                    await page.type('#input_serial_1',input_serial_1, {
                        delay: 30
                    })
                    await page.type('#input_serial_2',`${input_serial_2}${cod.substr(0,3)}`, {
                        delay: 25
                    })
                    await page.type('#input_serial_3',cod.substr(3,), {
                        delay: 25
                    })
                    await page.click('.confirm-btn')
                    await page.waitFor('.rr-modal__inner')
                    await page.click('.rr-modal__close', {
                        delay: 1000
                    })
                    await page.evaluate(() =>{

                        let ipt1 = document.querySelector('#input_serial_1')
                        let ipt2 = document.querySelector('#input_serial_2')
                        let ipt3 = document.querySelector('#input_serial_3')

                        ipt1.value = ''
                        ipt2.value = ''
                        ipt3.value = ''
                    })
                
                            
                } catch (error) {
                    console.log(error)
                    console.log('Erro..........')
                    break;
                }
                    i++
            }
             
    await browser.close()

}

rodar()