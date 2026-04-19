package com.charly.productmanagement.web;

import com.charly.productmanagement.entity.Product;
import com.charly.productmanagement.repository.ProductRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class ProductController {

    private final ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable(name="id") Long id){
        return productRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable(name="id") Long id){
        productRepository.deleteById(id);
    }
}
