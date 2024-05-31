package de.neuefische.backend.model;

public record Products(
        String id, String name, int stock, double price
) {
}
