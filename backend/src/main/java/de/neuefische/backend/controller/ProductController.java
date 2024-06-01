package de.neuefische.backend.controller;

import de.neuefische.backend.model.Products;
import de.neuefische.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public Products addProduct(@RequestBody Products product) {
        return productRepository.save(product);
    }
}
