package de.neuefische.backend.repository;
import de.neuefische.backend.model.Product;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository <Product, String> {
}
