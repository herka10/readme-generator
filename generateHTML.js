const generateHTML = (data) => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        
            <title>ReadMe Generator</title>
        </head>
        
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        Img
                    </div>
                    <div class="col-md-6">
                        <h1>Kao Nou's ReadMe</h1>
                        <h2>Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam odit praesentium porro sed in magnam officiis, nemo quaerat quisquam aut impedit explicabo ullam doloribus rerum ipsum cumque vel! Excepturi.
                        </p>
                    </div>
                </div>
        
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        
        </body>
        </html>  
    `
}

module.exports = generateHTML