let well = [{ id: 0, name: 'Camera', url: 'https://www.bhphotovideo.com/images/images2500x2500/canon_eos_1d_x_mark_ii_1220852.jpg' },
{ id: 1, name: 'Cdj', url: 'https://pdj-ecom-cdn.azureedge.net/-/media/pioneerdj/images/products/player/cdj-850/black/cdj-850-main.png?h=240&w=320&hash=93957ACF858513EFF7CC66ACB0FDC8687FF1D170' }];


let id = 2;



//this is a page with a bunch of methods on it 
module.exports = {

    wishGetter: (req, res) => {
        res.status(200).send(well)
    },

    wishAdder: (req, res) => {

        well.push({
            id: id,
            name: req.body.name,
            url: req.body.url
        })
        id++
        res.status(200).send(well)
    },

    deleteWish: (req, res)=> {
        for(let i =0; i<well.length; i++){
            if(well[i].id === +req.params.id){
                well.splice(i, 1);
            }
        }
        res.status(200).send(well);
    },

    changeWish: (req, res) => {
        console.log(req.body)
        for(let i=0; i< well.length; i++)
        if(well[i].id === +req.params.id ){
            well[i].name = req.body.name;
            res.status(200).send(well);
        }
    } 

}