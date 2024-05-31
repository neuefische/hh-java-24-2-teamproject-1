package de.neuefische.backend.repository;
import de.neuefische.backend.model.Products;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductsRepository extends MongoRepository <Products, String> {
}
