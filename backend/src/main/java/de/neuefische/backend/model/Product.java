package de.neuefische.backend.model;

public record Product(
        String id, String name, int stock, double price
) {
}
