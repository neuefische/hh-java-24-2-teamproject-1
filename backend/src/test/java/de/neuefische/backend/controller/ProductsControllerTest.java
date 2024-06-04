package de.neuefische.backend.controller;


import de.neuefische.backend.model.Product;
import de.neuefische.backend.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ProductsControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ProductRepository productsRepository;

    @Test
    @DirtiesContext
    void getProductById_ReturnsProduct() throws Exception {
        // GIVEN
        Product existingProduct = new Product("1", "p1", 10, 10.0);
        productsRepository.save(existingProduct);
        // WHEN
        mockMvc.perform(get("/api/products/1"))
                // THEN
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                            "id": "1",
                            "name": "p1",
                            "stock": 10,
                            "price": 10.0
                        }
                        """));
    }
}