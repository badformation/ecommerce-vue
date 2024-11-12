<template>
    <!-- Login 13 - Bootstrap Brain Component -->
    <section class="py-3 py-md-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                    <div class="card border border-light-subtle rounded-3 shadow-sm">
                        <div class="card-body p-3 p-md-4 p-xl-5">
                            <div class="text-center mb-3">
                                <a to="/">
                                    <h2>🛍️ La Boutique</h2>
                                </a>
                            </div>
                            <h2 class="fs-6 fw-normal text-center text-secondary mb-4">Inscrivez-vous</h2>
                            <form action="#!">
                                <div class="row gy-2 overflow-hidden">
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input
                                                type="name"
                                                class="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Nom"
                                                required
                                            />
                                            <label for="name" class="form-label">Nom</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input
                                                type="firstname"
                                                class="form-control"
                                                name="firstname"
                                                id="firstname"
                                                placeholder="Prénom"
                                                required
                                            />
                                            <label for="firstname" class="form-label">Prénom</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input
                                                type="email"
                                                class="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="nom@exemple.com"
                                                required
                                            />
                                            <label for="email" class="form-label">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input
                                                type="password"
                                                class="form-control"
                                                name="password"
                                                id="password"
                                                value=""
                                                placeholder="Mot de passe"
                                                required
                                            />
                                            <label for="password" class="form-label">Mot de passe</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input
                                                type="password"
                                                class="form-control"
                                                name="password"
                                                id="password"
                                                value=""
                                                placeholder="Mot de passe"
                                                required
                                            />
                                            <label for="password" class="form-label">Mot de passe</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-flex gap-2 justify-content-between">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    name="rememberMe"
                                                    id="rememberMe"
                                                />
                                                <label class="form-check-label text-secondary" for="rememberMe">
                                                    Rester connecté
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid my-3">
                                            <button class="btn btn-dark btn-lg" type="submit">S'inscrire</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
