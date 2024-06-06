package de.neuefische.backend.controller;

import de.neuefische.backend.model.Product;
import de.neuefische.backend.repository.ProductRepository;
import de.neuefische.backend.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class ProductControllerUnitTest {

    private MockMvc mockMvc;
    private ProductRepository productRepository;

    @BeforeEach
    public void setUp() {
        productRepository = Mockito.mock(ProductRepository.class);
        ProductService productService = new ProductService(productRepository);
        ProductController productController = new ProductController(productRepository, productService);
        mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
    }

    @Test
    void addProduct() throws Exception {
        Product product = new Product("1", "Product1", 10, 19.99);
        Mockito.when(productRepository.save(Mockito.any(Product.class))).thenReturn(product);

        mockMvc.perform(post("/api/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\": \"Product1\", \"stock\": 10, \"price\": 19.99}"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                            "id": "1",
                            "name": "Product1",
                            "stock": 10,
                            "price": 19.99
                        }
                        """));
    }
}
