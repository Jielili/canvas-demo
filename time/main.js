function draw() {
    console.log('load')
    console.log(moment().format('DD'))
    const ctx = document.getElementById('canvas').getContext('2d')
    ctx.save();
    ctx.translate(15 * 44, 0)
    for (let i = -15; i < 0; i++) {
        ctx.strokeRect(i * 44, 0, 44, 44)
        ctx.strokeText(moment().add(i, 'd').format('DD'), i * 44, 10)
    }

    // document.addEventListener('scroll', (e) => {
        // console.log(e)
    // })

    window.onscroll = function(e){
        console.log(e)
    }


}