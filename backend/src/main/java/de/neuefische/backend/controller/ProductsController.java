package de.neuefische.backend.controller;

import de.neuefische.backend.model.Products;
import de.neuefische.backend.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;

    @PostMapping
    public Products addProduct(@RequestBody Products product) {
        return productsRepository.save(product);
    }

    @GetMapping
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    @DeleteMapping("/{productId}")
    public void deleteProductById(@PathVariable String productId) {
        productsRepository.deleteById(productId);
    }
}
