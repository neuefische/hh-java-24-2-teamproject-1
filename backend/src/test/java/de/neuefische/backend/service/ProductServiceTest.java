package de.neuefische.backend.service;

import de.neuefische.backend.model.Product;

import de.neuefische.backend.repository.ProductRepository;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ProductServiceTest {

    ProductRepository productRepo = mock(ProductRepository.class);
    ProductService productService = new ProductService(productRepo);

    @Test
    void getProductById_WhenIdIs1_FindProduct1() {
        // GIVEN
         Product p1 = new Product("1", "p1", 10, 10.0);
        when(productRepo.findById("1")).thenReturn(Optional.of(p1));
        //WHEN
        Product actual = productService.getProductById("1");
        //THEN
        assertEquals(p1, actual);
        verify(productRepo).findById("1");
    }
}