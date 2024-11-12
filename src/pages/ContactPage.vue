<template>
    <div class="container" >
        
        <h1 class="text-center pt-5">Contactez-nous</h1>
        <p class="text-center">Vous avez une question ? Un problème à nous signaler ?</p>
        <div class="container-fluid my-3 px-5">
            <div class="row">
                <div class="mb-3 col-lg-6">
                    <input type="first-name" class="form-control" id="exampleFormControlInput1" placeholder="Nom" />
                </div>
                <div class="mb-3 col-lg-6">
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Prénom" />
                </div>
            </div>
            <div class="mb-3">
                <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="email@hotmail.com"
                />
            </div>
            <div class="select-contain w-100 h-100">
                <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Livraison</option>
                    <option value="1">Commandes</option>
                    <option value="2">Remboursement</option>
                    <option value="3">Autres</option>
                </select>
            </div>
            <div class="">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="row d-flex align-content-center justify-content-center">
                <div class="col-12 col-xl-2 pt-4">
                    <button type="button" class="btn btn-dark h-100 w-100">Envoyer la demande</button>
                </div>
            </div>
        </div>
    </div>
</template>
